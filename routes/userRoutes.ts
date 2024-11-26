import { Router, Request, Response } from "express";
import { createUser, getUserById } from "../services/userService";

const router = Router();

router.post("/create", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
