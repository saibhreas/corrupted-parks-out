DROP DATABASE IF EXISTS parkout_db;
CREATE DATABASE parkout_db;
USE parkout_db;
	

CREATE TABLE Users (
  id INT AUTO_INCREMENT NOT NULL,
  user_name VARCHAR (30) NOT NULL,
  user_email VARCHAR (60) NOT NULL,
  user_password VARCHAR (5) NOT NULL,
  PRIMARY KEY (id)
);

-- removed admissions
CREATE TABLE Parks (
  id INT AUTO_INCREMENT NOT NULL,
  park_name VARCHAR (60) NOT NULL,
  park_phone_number INTEGER,
  park_activities VARCHAR (60) NULL,
  park_fees INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);            

