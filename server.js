const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const Url = require("./Url");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/urlshortener")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: "URL required" });
  }

  const shortCode = shortid.generate();

  const newUrl = new Url({
    originalUrl,
    shortCode
  });

  await newUrl.save();

  res.json({
    shortUrl: `http://localhost:5000/${shortCode}`
  });
});

// redirect
app.get("/:code", async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });
  if (!url) return res.status(404).send("Not found");
  res.redirect(url.originalUrl);
});

app.listen(5000, () => console.log("Server running on 5000"));