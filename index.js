const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const cadence1 = require("./data/cadence1.json");
const main1 = require("./data/main1.json");
const main2 = require("./data/main2.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json({
    cadence1,
    main1,
    main2,
  });
});

app.listen(port, () => {
  console.log(`Capstone backend listening on port ${port}`);
});
