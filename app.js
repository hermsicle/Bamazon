const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '7upisyummY',
    database: 'bamazon'
})

connection.connect();

//Show the mysqp table as a table:
showTable = () => {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    })
}
showTable();
//Inquirer prompt function 
startApp = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Select an item Id which you would like to purchase',
        name: 'userChoice'
    }).then(answer => {
        let choiceId = answer.userChoice;
        //Grab the data from the mysql conneection:
        connection.query("SELECT * FROM products WHERE id = ?", choiceId, (err, res) => {
            if (err) throw err;
            if (res.length === 0) {
                console.log("Product does not exist, please select a product from above");
                startApp();
            }
            else {
                inquirer.prompt({
                    type: 'input',
                    message: 'How many units would you like to purchase of this product Id?',
                    name: 'userBuy'
                }).then(answer2 => {
                    let selectedQuantity = answer2.userBuy;
                    let stockQuantity = res[0].stock_quantity;
                    //console.log(res[0].stock_quantity)
                    console.log(selectedQuantity);
                    console.log(res[0].stock_quantity);
                    if (selectedQuantity > stockQuantity) {
                        console.log("Our apologies, we only have " + res[0].stock_quantity + " left in our inventory");
                        startApp();
                    }
                    else {

                        console.log(res[0].product_name + " purchased");
                        console.log(selectedQuantity + " purchased for the price of " + res[0].price + "each");
                        console.log("Thank you for purchasing with us today");
                        connection.end();

                        //let newQuantity = res[0].stock_quantity - selectedQuantity;
                        // connection.query("UPDATE products SET stock_quantity = " + newQuantity + "WHERE id = " + res[0].id, (err, res) => {
                        //     if (err) throw err;
                        // })
                    }
                })
            }
        })
    })
}
