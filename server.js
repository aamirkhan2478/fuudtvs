const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { auth } = require("./Middleware/auth");
const path = require("path");

//Static Folder
app.use(express.static(path.resolve(__dirname, "public")));

//dotenv
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;

//convert json form
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//Cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Database Connection
require("./Database/conn");

//Routers
app.use("/", require("./Routes/user"));
app.use("/dashboard", auth, require("./Routes/dashboard"));

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
