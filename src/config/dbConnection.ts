import sequelize from "./db";
import i18n from "../i18n/config";

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(i18n.t("db.connected"));

    if (process.env.NODE_ENV !== "production") {
      await sequelize.sync({ alter: true });
      console.log(i18n.t("db.models_synced"));
    } else {
      console.log(i18n.t("db.sync_production_warning"));
    }
  } catch (err) {
    console.error(i18n.t("db.connection_error"), err);
    process.exit(1);
  }
};
