const express = require('express');
const bodyParser = require('body-parser');
const User = require("./Mongo/User");
const app = express();
const AddUser = require("./moduels/AddUser");
const getAllUsers = require("./moduels/GetAllUsers");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});
app.post('/add_user', (req, res) => {
    AddUser(req, res);
});

app.post('/get_users', (req, res) => {
    getAllUsers(req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));