const User = require("../Mongo/User");
function AddUser(req, res) {
    const { userName, email, age } = req.body;

    var user = new User({ userName: userName, email: email, age: age });
    user.validate(function (err) {
        if (err) {
            res.send({ status: "notvalidate" })
        }
        else {
            User.find({ userName: userName }, function (err, foundItems) {
                if (foundItems.length == 0) {
                    user.save();
                    res.send({ status: "succ" });
                } else {
                    res.send({ status: "exist" });
                }
            }
            );
        }
    });
}

module.exports = AddUser;