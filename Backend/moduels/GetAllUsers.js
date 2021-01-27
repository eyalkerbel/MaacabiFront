const User = require("../Mongo/User");
function getAllUsers(req, res) {
    User.find({}, function (err, foundUsers) {
        res.send({ users: foundUsers });
    });
}
module.exports = getAllUsers;