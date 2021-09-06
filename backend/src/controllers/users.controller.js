const userCtrl = {};
const User = require('../models/User');

userCtrl.getUser = async (req, res) => {
    const users = await User.find();

    res.send(users)
}
userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.json('user created')
}

userCtrl.deleteUser = async (req, res) => {


    await User.findOneAndDelete({ _id: req.params.id })
    res.json('user Deleted')
}

module.exports = userCtrl;