import { createWorkout } from "@/controller";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ workouts: [] });
});

router.get("/:id", (req, res) => {
  res.send({ workout: { id: req.params.id } });
});

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.send({ workout: { id: req.params.id }, deleted: true });
});

router.patch("/:id", (req, res) => {
  res.send({ workout: { id: req.params.id, ...req.body }, updated: true });
});

export default router;
