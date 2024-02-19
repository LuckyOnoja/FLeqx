import express from "express";
import bodyParser from "body-parser";
const port = process.env.PORT || 4000;
const app = express();

//API MIDDLE WARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); //  this is to acept data in json format
app.use(express.urlencoded({ extended: true })); //this is basically to decode the data sent through html form

app.use(express.static("public"));

// API ROUTES

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/email.html");
});
app.post("/loginPost", (req, res) => {
  console.log(req.body);

  res.sendFile(__dirname + "/public/home.html");
});

app.listen(port, () => {
  console.log("FLEQX is live on port " + port);
});
