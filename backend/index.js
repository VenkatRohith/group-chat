require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  client_instance_url,
  port,
  db_conn_string,
  db_name,
} = require("./env-variables");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/user");
const userLoginRoutes = require("./routes/userLogin");
const groupRoutes = require("./routes/group");
const messageRoutes = require("./routes/message");

const app = express();

//middleware
app.use(
  cors({
    origin: client_instance_url,
    methods: "GET,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(logger);

// Hearbeat api
app.get("/api/heartbeat", (_, res) => {
  res.status(200).json("Yaah🤩, Server is up🌟⬆️");
});

//routes
app.use("/api/userLogin", userLoginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/messages", messageRoutes);

//connect to DB
mongoose.set("strictQuery", true);
mongoose
  .connect(`${db_conn_string}/${db_name}`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB & listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
