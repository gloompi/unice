export const isAdmin = ({ currentAdmin }) =>
  currentAdmin && currentAdmin.role === "admin";
