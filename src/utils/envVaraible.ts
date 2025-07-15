import dotenv from "dotenv"
import {from,logger} from "env-var"

dotenv.config()

const env = from(process.env, {}, logger)

export default {
  DATABASE_URL: env.get("DATABASE_URL").required().asString(),
  PORT: env.get("PORT").required().asInt(),
  BETTER_AUTH_SECRET: env.get("BETTER_AUTH_SECRET").required().asString(),
  BETTER_AUTH_URL: env.get("BETTER_AUTH_URL").required().asString()
}