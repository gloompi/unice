import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const {
  PORT,
  MONGO_PASSWORD,
  MONGO_USERNAME,
  MONGO_DB,
  SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  FACEBOOK_ID,
  FACEBOOK_SECRET,
} = process.env || {}

export default {
  appUrl: 'http://localhost:8080',
  db: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DB}?retryWrites=true&w=majority`,
  port: PORT || 8080,
  secret: SECRET,
  googleId: GOOGLE_CLIENT_ID,
  googleSecret: GOOGLE_SECRET,
  facebookId: FACEBOOK_ID,
  facebookSecret: FACEBOOK_SECRET,
}
