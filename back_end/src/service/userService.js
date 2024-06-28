import bcrypt from 'bcryptjs'
import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt_web_basic'
})

const salt = bcrypt.genSaltSync(10)

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password)

    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username],
        function (err, results, fields) {
            if(err){
                console.log(err)
            }
        }
    )
}

const getUserList = () => {
    let users = [];
    connection.query(
        'Select * from users ',
        function (err, results, fields) {
            if(err){
                console.log(err)
            }
        }
    )
}

module.exports = {
    createNewUser, getUserList
}