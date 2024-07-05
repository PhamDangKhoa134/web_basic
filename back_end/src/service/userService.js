import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

const salt = bcrypt.genSaltSync(10)

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async(email, password, username) => {
    let hashPass = hashPassword(password)

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt_web_basic',
        Promise: bluebird
    })

    // connection.query(
    //     'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username],
    //     function (err, results, fields) {
    //         if(err){
    //             console.log(err)
    //         }
    //     }
    // )

    const [rows, fields] = await connection.execute('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username]);
}

const getUserList = async() => {
    // connection.query(
    //     'Select * from users ',
    //     function (err, results, fields) {
    //         if(err){
    //             console.log(err)
    //             return users;
    //         }
    //         users = results
    //         return users
    //     }
    // )

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt_web_basic',
        Promise: bluebird
    })

    const [rows, fields] = await connection.execute('Select * from users ');
    return rows;
}

const deleteUser = async(id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt_web_basic',
        Promise: bluebird
    })

    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id])
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    createNewUser, getUserList, deleteUser
}