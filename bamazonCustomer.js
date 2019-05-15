//Require Necessary Modules
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 8889,

  // username
  user: "root",

  // password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    askCustomer();
  });
}

function askCustomer(){
    inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the id of the item you would like to purchase?"
      },
      {
        name: "amount",
        type: "input",
        message: "How many of that item would you like to purchase?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
      },
    ])
    .then(function(answer) {
        //If there are not that many to purchase, return error

        //Otherwise fulfill the order and deduct the amount bought from the inventory
        //And return the total cost of the purchase
    })
    
}