import userService from '../service/userService'

const handleHelloWord = (req, res) => {
    const name = "Khoa";
    return res.render("home.ejs", {name});
}

const handleUserPage = (req, res) => {
    return res.render("use.ejs")
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.password;

    userService.createNewUser(email, password, username)
    return res.send("handlCreateNewUser")
}

module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser
}