const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());


app.use(express.urlencoded({ extended: true }));
const db = require("./models");
db.sequelize.sync();

require("./routes/userouter")(app);
require("./routes/productrouter")(app);
require("./routes/outletrouter")(app);
require("./routes/orderrouter")(app);





app.get("/", (req, res) => {
  res.json({ displayInformation: "Order  Collection" });
});

const PORT = process.env.PORT || 8980;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});