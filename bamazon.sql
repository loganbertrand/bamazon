-- Drops the db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called bamazon_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

-- Creates new rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fortnite", "video games", 30, 126);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("call of duty", "video games", 60, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("harry potter", "books", 15, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("spaghetti", "food", 5.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("splinter cell", "video games", 60, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pendragon", "books", 30, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sunglasses", "apparel", 30, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sweater", "apparel", 34.99, 29);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pizza", "food", 7.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("the life of john stamos", "books", 13, 20);