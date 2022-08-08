const express = require("express");
const cors = require("cors");
const app = express();
class Friend {
  firstName;
  lastName;
  email;
  phone;
  favoriteLanguage;
  constructor(firstName, lastName, email, phone, favoriteLanguague) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favoriteLanguage = favoriteLanguague;
  }
  toJson() {
    return {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      phone: this.phone,
      favoritelanguage: this.favoriteLanguage,
    };
  }
}
function newFriend(data) {
  return new Friend(
    data.firstname,
    data.lastname,
    data.email,
    data.phone,
    data.favoritelanguage
  );
}

const PORT = 3000;
const CORS_OPTIONS = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["POST", "GET"],
};
app.use(cors(CORS_OPTIONS));
//JAVASCRIPT MAGIC - SHALAKAZAMDODA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let friends = [];

app.post("/addFriend", (req, res) => {
  console.log("POST RECEIVED ON: /addFriend");
  console.log("BODY RECEIVED:" + req.body);
  friends.push(newFriend(req.body));
});
app.get("/getFriends", (req, res) => {
  console.log("Friends requested");
  console.log(friends);
  res.send(friends);
});
app.listen(PORT, () => {
  console.log("Listening on port" + PORT);
});
