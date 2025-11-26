import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendMail from "../api/send-mail.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", sendMail);

app.listen(3001, () => {
  console.log("Backend corriendo en puerto 3001");
});
