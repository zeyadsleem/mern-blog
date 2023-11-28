import express from "express";

const articlesInfo = [
  {
    name: "First-article",
    upvotes: 0,
    comments: [],
  },
  {
    name: "Second-article",
    upvotes: 0,
    comments: [],
  },
  {
    name: "Third-article",
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.upvotes++;
    res.send(`The ${name} article now hase ${article.upvotes} upvotes`);
  } else {
    res.send("That article doesn't exist");
  }
});

app.put("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
  } else {
    res.send("That article doesn't exist");
  }
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
