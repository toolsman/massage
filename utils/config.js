const joi = require("joi");

require("dotenv").config();

// validating environment variables
const schema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi
      .string()
      .valid("development", "production", "staging")
      .required(),

    // local mysql db connection
    LOCAL_DB_USER: joi.string().required(),
    LOCAL_DB_PWD: joi.string().required(),
    LOCAL_DB_NAME: joi.string().required(),
    LOCAL_DB_HOST: joi.string().required(),
    LOCAL_DB_PORT: joi.number().required(),

    // remote mysql db connection
    REMOTE_DB_USER: joi.string().required(),
    REMOTE_DB_PWD: joi.string().required(),
    REMOTE_DB_NAME: joi.string().required(),
    REMOTE_DB_HOST: joi.string().required(),
    REMOTE_DB_PORT: joi.number().required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  isDevelopment:
    envVars.NODE_ENV === "development" || envVars.NODE_ENV === "staging"
      ? true
      : false,
  isLocahost: envVars.NODE_ENV === "development" ? true : false,
  port: envVars.PORT,
  NODE_ENV: envVars.NODE_ENV,
  developement_db: {
    database: envVars.LOCAL_DB_NAME,
    username: envVars.LOCAL_DB_USER,
    password: envVars.LOCAL_DB_PWD,
    dialect: "mysql",
    host: envVars.LOCAL_DB_HOST,
    port: envVars.LOCAL_DB_PORT,
  },
  production_db: {
    database: envVars.REMOTE_DB_NAME,
    username: envVars.REMOTE_DB_USER,
    password: envVars.REMOTE_DB_PWD,
    dialect: "mysql",
    host: envVars.REMOTE_DB_HOST,
    port: envVars.REMOTE_DB_PORT,
  },
};
module.exports = config;
