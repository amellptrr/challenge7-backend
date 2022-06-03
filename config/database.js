/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "xplqlfpmemfbco",
  DB_PASSWORD = "694e99b9fdb8b4d97c4dc8cafc7604edb376ba65595400204abfe55752141dab",
  DB_HOST = "ec2-34-198-186-145.compute-1.amazonaws.com",
  DB_NAME = "d8lala1qe6781e",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
