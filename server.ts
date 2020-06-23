import express = require("express");
import mongoose = require("mongoose");
import cors = require("cors");
import * as http from "http";
import config = require("config");
const User = require("./models/User");

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

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/user/:id", require("./routes/api/inventory"));

interface IInventory {
  inventory: [];
}

//@route put/user/:id
app.put("/api/user/:id", (req: express.Request, res: express.Response) => {
  User.findOne({ _id: req.params.id }).then(user => {
    if (user) {
      user.updateOne({
        Inventory: req.body
      })
        .then((inventory: IInventory) => {
          if (!inventory) {
            return res.status(400).json({
              message: "Something went wrong."
            })
          };
          return res.status(200).json(user);
        })
    } else {
      return res.status(400).json({
        message: 'yeaa nope'
      })
    }
  })
})


const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT);
server.on("listening", () => {
  console.info(`server running at http://localhost:${PORT}`);
});
