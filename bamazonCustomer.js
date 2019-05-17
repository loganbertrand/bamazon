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

// variables to help us out
var itemChosen;
var amountChosen;
var totalCost;

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    itemChosen = '';
    amountChosen = 0;
    totalCost = 0;
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
      amountChosen = answer.amount 
      for(var i = 0; i < res.length; i++){
        
        if(answer.item == res[i].item_id){
          let itemPrice = res[i].price
          //console.log(itemPrice)
          if(res[i].stock_quantity < amountChosen){
            console.log("Sorry, we do not have enough of that item, please select a different item")
            restart() ;
          }else{
            let newStockQuantity = res[i].stock_quantity - amountChosen
            
            //update statment
            let sql = 'UPDATE products SET stock_quantity = '+ newStockQuantity + ' WHERE item_id = ' + answer.item +'';

            let data = [false, 1];

            // execute the UPDATE statement
            connection.query(sql, data, (error, results, fields) => {
            if (error){
            return console.error(error.message);
            }
            console.log("You purchase is successful! Your total purchase price is: " + answer.amount* itemPrice)
            goAgain();
            });
            
          }
        }
      }
      
    })
  });
}

function goAgain(){
  inquirer
  .prompt([
    {
      name: "goAgain",
      type: "confirm",
      message: "Would you like to purchase another item?"
    }
  ])
  .then(function(answer) {
    if(answer.goAgain == true){
      restart();
    }else{
      connection.end();
    }
  });
}

function restart(){
    start();
}