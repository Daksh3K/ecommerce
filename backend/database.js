var mysql = require('mysql');
var connection =  mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6499218",
  password: "5V2S9jFzAk",
  port: 3306,
  database: "sql6499218"
})

connection.connect();

const createUser = (uid, address, phone) => {
  connection.query(`INSERT INTO users VALUES ("${uid}", "${address}", "${phone}")`, (error, results, fields) => {
    if (error) throw error;
    console.log(results)
  })
}

const getProducts = (callback) => {
  connection.query(`SELECT * FROM products`, (error, results,fields) => {
    if (error) throw error;
    console.log(results)
    callback(results)
    
  })
}

module.exports = {
  createUser,
  getProducts
}