import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";
import path from "path";

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: path.join(__dirname, "./locales/{{lng}}/{{ns}}.json"),
    },
    detection: {
      order: ["header", "querystring"],
      caches: false,
    },
    debug: false,
    preload: ["en"], // preload languages
  });

export default i18next;
