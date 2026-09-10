const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);


const express = require("express");
const mongodb = require("./data/database");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", routes);

mongodb.initDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`Database connected. Server running on port ${PORT}`);
    });
  }
});