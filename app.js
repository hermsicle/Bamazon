const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '7upisyummY',
    database: 'bamazon'
})

connection.connect()

//Show the mysqp table as a table:
showTable = () => {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

//Inquirer prompt function 
prompt1 = () => {
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
            }
            else {
                inquirer.prompt({
                    type: 'input',
                    message: 'How many units would you like to purchase of this product Id?',
                    name: 'userBuy'
                }).then(answer => {
                    let selectedQuantity = answer.userBuy;
                    if (selectedQuantity > res[0].stock_quantity) {
                        console.log("Our apologies, we only have " + res[0].stock_quantity + " left in our inventory");
                    }
                })
            }
            //prompt1();
        })
    })
}
prompt1();