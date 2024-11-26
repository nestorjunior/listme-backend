import { Router, Request, Response } from "express";
import { createUser, getUserById } from "../services/userService";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  res.status(200).json({ userId });
});

export default router;
