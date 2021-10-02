const express = require("express");
const htttp = require("http");
const cors = require("cors");
const DUMMY_DATA = require("./data");

const PORT = process.env.PORT || 4500;
const app = express();
const server = htttp.createServer(app);

app.use(cors({
  origin: '*'
}));

app.get("/", (req, res) => {
  res.send(`Server is up and running on port -${PORT}`);
});

app.get("/memes", (req, res) => {
  res.json(DUMMY_DATA);
});

server.listen(PORT, () => {
  console.log(`Listening on port - ${PORT}`);
});
