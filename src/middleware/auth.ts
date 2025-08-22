import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Swap this out with actual Okta / OAuth / Amazon auth
  console.log("🔐 Auth middleware triggered");
  next();
};
