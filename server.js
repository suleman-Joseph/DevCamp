const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./Routes/bootcamps");
const logger = require("./middleware/logger");
const ConnectDB = require("./config/bd");
const colors = require("colors");
//load env var
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json());

app.use(logger);

app.use("/api/v1/bootcamps", bootcamps);

ConnectDB();
const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("unhandledRejection", (err, Promise) => {
  console.log(`Error:${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
