const handleHelloWord = (req, res) => {
    const name = "Khoa";
    return res.render("home.ejs", {name});
}

const handleUserPage = (req, res) => {
    return res.render("use.ejs")
}

module.exports = {
    handleHelloWord, handleUserPage
}