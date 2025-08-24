import "dotenv/config";
import express from "express";
import { queryAIModel } from "./helpers/queryAIModel.js";
import { geminiMessageExtractor } from "./helpers/geminiMessageExtractor.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server running",
  });
});

app.post("/chat", async (req, res) => {
  const { prompt = "Saluda por favor" } = req.body;

  try {
    const apiResponse = await queryAIModel(prompt);

    return res.json({
      AIModelResponse: geminiMessageExtractor(apiResponse),
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Internal error, please check logs",
    });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
