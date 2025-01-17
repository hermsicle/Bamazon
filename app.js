const mysql = require('mysql');
const inquirer = require('inquirer');

require('dotenv').config();


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.myPassword,
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
                    name: 'quantity'
                }).then(answer2 => {
                    console.log(res[0].stock_quantity)
                    let quantity = answer2.quantity;
                    if (quantity > res[0].stock_quantity) {
                        console.log(
                            "Our apologies, we only have " +
                            res[0].stock_quantity +
                            " left in our inventory"
                        );
                        startApp();
                    } else {
                        console.log("");
                        console.log(res[0].product_name + " purchased");
                        console.log(quantity + " qty @ $" + res[0].price);
                        var price = quantity * res[0].price;
                        console.log("Total price is : $" + price)

                        var newQuantity = res[0].stock_quantity - quantity;
                        connection.query(
                            "UPDATE products SET stock_quantity = " +
                            newQuantity +
                            " WHERE id = " +
                            res[0].id,
                            function (err, resUpdate) {
                                if (err) throw err;
                                console.log("");
                                console.log("Your Order has been Processed");
                                console.log("Thank you for Shopping with us...!");
                                console.log("");
                                connection.end();
                            }
                        )
                    }
                })
            }
        })
    })
}
