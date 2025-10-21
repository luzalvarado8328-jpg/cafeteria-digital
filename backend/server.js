import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/cafeteria", {
    
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Cafetería Digital funcionando 🚀");
});

// Ruta para usuarios
app.use("/api/users", usersRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));