const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '7upisyummY',
    database: 'bamazon'
})

connection.connect(err => {
    if (err) throw err;
    console.log(`you are connected to ID : ${connection.threadId}`);
    showTable();
    connection.end();
})

showTable = () => {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}