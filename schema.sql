-- create database
CREATE DATABASE grocery_list;
-- use database
USE grocery_list;
-- create table
CREATE TABLE IF NOT EXISTS groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL
);
-- insert sample item
INSERT INTO groceries VALUES (1, "pizza", 5);