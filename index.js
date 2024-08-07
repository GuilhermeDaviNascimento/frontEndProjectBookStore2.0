const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const session = require("express-session");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const userController = require(`./controller.js`);
require('dotenv').config()

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/search/:title", userController.searchInput);
app.get("/reserve/:book_id", userController.reserve);
app.get("/borrow/:book_id", userController.borrow);
app.get("/register", (req, res) => res.render(`register`));
app.get("/book/:book_id", userController.loadBookPage);
app.get("/login", (req, res) => res.render(`login`));
app.post("/loginUser", userController.login);
app.post("/createuser", userController.RegisterUser);
app.get(`/`, userController.getAllBooksOnLoad);
app.get("/changepassword/:password", userController.changepassword);
app.get(`/category/:category`, userController.searchCategory);
app.get("/logout", userController.logoutSession);
app.get("/adminpage", userController.loadAdminpage);
app.get("/favorite", userController.GetAllFavoriteBooks);
app.get("/read", userController.GetAllReadBooks);
app.get("/reading", userController.GetAllReadingBooks);
app.get(`/favoritethis/:bookid`, userController.favoriteThisbook);
app.get(`/readthis/:bookid`, userController.readThisbook);
app.get(`/readingthis/:bookid`, userController.readingThisbook);
app.post("/updateuser", userController.updateUser);
app.post('/deleteUser', userController.deleteUser)
app.post("/givebackbook", userController.givebackbook)
app.get("/createnewbook", userController.createnewbook)
app.post("/createbook", userController.createthisbook)

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
