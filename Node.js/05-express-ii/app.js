const express = require("express");
const app = express();

const PORT = 3000;

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.get("/test{s}", (req, res) => res.send("test, world!"));

app.get("/:name/message", (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(`Hi, ${req.params.name}`)
  //res.end()
});



app.get("/{*splat}", (req, res) => res.send("Nope!"));


app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express server listening on port ${PORT}.`);
});