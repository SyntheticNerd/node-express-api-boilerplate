import { Request, Response } from "express";
import User from "../models/User";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });

    res.status(201).json({
      user,
      message: req.t("user.created"),
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : req.t("unknown_error");

    res.status(400).json({ error: msg });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : req.t("unknown_error");

    res.status(500).json({ error: msg });
  }
};

// Get a single user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: req.t("user.not_found") });

    res.json(user);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : req.t("unknown_error");

    res.status(500).json({ error: msg });
  }
};
