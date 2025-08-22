import express from "express";
import routes from "./routes";
import { authMiddleware } from "./middleware/auth";
import { errorHandler } from "./middleware/errorHandler";
import i18nextMiddleware from "i18next-http-middleware";
import i18n from "./i18n/config";

const app = express();

app.use(express.json());
app.use(i18nextMiddleware.handle(i18n));
app.use(authMiddleware);
app.use("/", routes);
app.use(errorHandler);

export default app;
