import { Request, Response } from "express";
import { createUser } from "../services/userService";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await createUser(email, password, name);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
