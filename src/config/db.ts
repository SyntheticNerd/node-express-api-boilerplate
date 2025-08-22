import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: ["staging", "development"].includes(process.env.NODE_ENV || "")
      ? console.log
      : false,
  },
);

export default sequelize;
