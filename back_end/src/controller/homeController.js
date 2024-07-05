import userService from '../service/userService'

const handleHelloWord = (req, res) => {
    const name = "Khoa";
    return res.render("home.ejs", {name});
}

const handleUserPage = async(req, res) => {
    let userList = await userService.getUserList();
    // await userService.deleteUser(1)
    return res.render("use.ejs", {userList})
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username)
    
    return res.redirect("/user")
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id)
    return res.redirect("/user")
}

module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser, handleDeleteUser
}