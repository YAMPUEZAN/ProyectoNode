const mysql = require('mysql');
module.exports = () => {
return mysql.createConnection({
host: 'localhost',
password:'',
user: 'root',
database:'proyecto'
});
}