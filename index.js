import express from "express";
import { engine } from "express-handlebars";
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./HandleBars_Temps");

let users = [
  {
    id: 1,
    name: "Abdallah",
    city: "Ashmoun",
  },
  {
    id: 2,
    name: "Ahmed",
    city: "Cairo",
  },
  {
    id: 3,
    name: "Mohammed",
    city: "ALEX",
  },
  {
    id: 4,
    name: "Ali",
    city: "Tanta",
  },
  {
    id: 5,
    name: "Yassein",
    city: "Shibeen",
  },
];

let LI_Fun = (request, response) => {
  response.render("Lists", { layout: false, users });
  console.log("The Application is Running Successfully");
};

app.get("/lists", LI_Fun);

app.listen(7000);
