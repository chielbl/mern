import type { Request, Response } from "express";
import { Workout } from "@/models";

export const createWorkout = async (req: Request, res: Response) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).send({ workout });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
