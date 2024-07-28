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

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id
    let user = await userService.getUserById(id)
    let userData = {}
    userData = user
    // if (user && user.length > 0){
    //     userData = user[0]
    // }
    return res.render("update-user.ejs", {userData})
}

const handleUpdateUser = async(req, res)=> {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
    await userService.updateUserInfor(email, username, id);
    return res.redirect("/user");
}

module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser, handleDeleteUser, getUpdateUserPage, handleUpdateUser
}