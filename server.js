const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;
var corsOptions = {
  origin: "https://localhost:8081",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers

const router = require("./routes/productRoutes");

app.use("/api/products", router);

// testing api
app.get("/", (req, res) => {
  res.json({
    message: `Hello Snorm here !`,
  });
});

// Server Check
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
