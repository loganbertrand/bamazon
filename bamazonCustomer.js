//Require Necessary Modules
var mysql = require("mysql");

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
    console.log(res);
    connection.end();
  });
}