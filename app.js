const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./utils/db");
const config = require("./utils/config");

// routes
const massage = require("./routes/massage");

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

let corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api", massage);

sequelize
  .sync
  // { force: true }
  // eslint-disable-next-line
  // { force: true }
  ()
  // eslint-disable-next-line
  .then((result) => {
    //Start server
    app.listen(config.port, () => {
      console.log(`app started on ${config.port}`);
    });
  });
