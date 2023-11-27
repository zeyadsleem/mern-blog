import express from "express";
import { db, connectToDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(article);
  } else {
    res.sendStatus(404).send("Article not found!");
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    },
  );
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    article.upvotes++;
    res.send(`The ${name} article now hase ${article.upvotes} upvotes`);
  } else {
    res.send("That article doesn't exist");
  }
});

app.post("/api/articles/:name/comment", async (req, res) => {
  const { postedBy, text, name } = req.body;

  await db
    .collection("articles")
    .updateOne({ name }, { $push: { comments: { postedBy, text } } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.send(article.comments);
  } else {
    res.send("That article doesn't exist");
  }
});

connectToDb(() => {
  console.log("DATABASE is runing");
  app.listen(3000, () => {
    console.log("server is listening on port 3000");
  });
});
