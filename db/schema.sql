DROP DATABASE IF EXISTS parkout_db;
CREATE DATABASE parkout_db;

USE parkout_db;

CREATE TABLE Users (
  id INT AUTO_INCREMENT NOT NULL,
  user_name VARCHAR (30) NOT NULL,
  user_email VARCHAR (60) NOT NULL,
  user_password VARCHAR (5) NOT NUL,L
  PRIMARY KEY (id)
)

CREATE TABLE Parks (
  type INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR NOT NULL,
  park_contact INTEGER,
  FOREIGN KEY (user_id) REFERENCES (user_id) ON DELETE
)