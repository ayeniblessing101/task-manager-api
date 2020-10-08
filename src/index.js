const express = require("express");

require("./db/mongoose");

const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json()); // automatically parse incoming json as object so I can use it as an object

app.use(userRouter);

app.use(taskRouter);

app.listen(port, () => {
  console.log("App started on port " + port);
});
