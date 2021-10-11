import express from "express";
import cors from "cors";

import timesRoutes from "./routes/times";

const app = express();
const PORT = 8000;

app.use(express.json()); // registering this middleware for accepting json requests
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/times", timesRoutes);

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
