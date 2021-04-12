const express = require("express");
const genres = require("./routes/genres");
const customers=require("./routes/customers");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

mongoose
  .connect("mongodb://localhost/vidly", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
