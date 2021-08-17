import AdminBro from "admin-bro";
import AdminBroExpress from "@admin-bro/express";
import AdminBroMongoose from "@admin-bro/mongoose";
import bcrypt from "bcrypt";
import productModels from "./product.js";
import { isAdmin } from "./helpers.js";
import { Banner } from "../models/banner.js";
import { User } from "../models/user.js";

AdminBro.registerAdapter(AdminBroMongoose);

const banner = {
  resource: Banner,
  options: {
    actions: {
      edit: { isAccessible: isAdmin },
      delete: { isAccessible: isAdmin },
      new: { isAccessible: isAdmin },
    },
  },
};

const user = {
  resource: User,
  options: {
    properties: {
      encryptedPassword: { isVisible: false },
      password: {
        type: "string",
        isVisible: {
          list: false,
          edit: true,
          filter: false,
          show: false,
        },
      },
    },
    actions: {
      new: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(
                request.payload.password,
                10
              ),
              password: undefined,
            };
          }
          return request;
        },
        isAccessible: isAdmin,
      },
      edit: {
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(
                request.payload.password,
                10
              ),
              password: undefined,
            };
          }
          return request;
        },
        isAccessible: isAdmin,
      },
      delete: { isAccessible: isAdmin },
    },
  },
};

const options = {
  resources: [...productModels, banner, user],
  rootPath: "/admin",
  branding: {
    companyName: "Unice",
    logo: "https://www.unice.com/skin/frontend/longqi/pc/images/unice-logo.png",
  },
};

export const adminBro = new AdminBro(options);

export const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });

    if (!user || !user.encryptedPassword) return false;

    const match = await bcrypt.compare(password, user.encryptedPassword);

    if (match) return user;

    return false;
  },
  cookieName: "adminbro",
  cookiePassword: "session",
});
