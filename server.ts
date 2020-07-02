import express = require("express");
import mongoose = require("mongoose");
import cors = require("cors");
import * as http from "http";
import config = require("config");

const app = express();
app.use(cors());
app.use(express.json());

const db_url = config.get("db_prod_URL");

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Routes / Endpoints
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user/:id", require("./routes/api/favorites"));

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT);
server.on("listening", () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
