CREATE DATABASE IF NOT EXISTS groceries;

USE groceries;

CREATE TABLE IF NOT EXISTS grocery_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  item CHAR(255) NOT NULL,
  quantity INT NOT NULL
);

INSERT INTO grocery_items (item, quantity) VALUES ("pizza", 4);