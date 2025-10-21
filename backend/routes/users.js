import express from "express";
const router = express.Router();

// Datos temporales simulando usuarios registrados
let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;