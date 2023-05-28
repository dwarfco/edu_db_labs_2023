# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
``` mysql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role_id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`action`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`action` ;

CREATE TABLE IF NOT EXISTS `mydb`.`action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `role_id` INT NOT NULL,
  `action_id` INT NOT NULL,
  PRIMARY KEY (`role_id`, `action_id`),
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_action1_idx` (`action_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_action1`
    FOREIGN KEY (`action_id`)
    REFERENCES `mydb`.`action` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`datafile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`datafile` ;

CREATE TABLE IF NOT EXISTS `mydb`.`datafile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `upload_date` DATE NOT NULL,
  `file_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`file_collection`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`file_collection` ;

CREATE TABLE IF NOT EXISTS `mydb`.`file_collection` (
  `datafile_id` INT NOT NULL,
  `access_role_id` INT NOT NULL,
  `access_action_id` INT NOT NULL,
  PRIMARY KEY (`datafile_id`, `access_role_id`, `access_action_id`),
  INDEX `fk_file_collection_datafile1_idx` (`datafile_id` ASC) VISIBLE,
  INDEX `fk_file_collection_access1_idx` (`access_role_id` ASC, `access_action_id` ASC) VISIBLE,
  CONSTRAINT `fk_file_collection_datafile1`
    FOREIGN KEY (`datafile_id`)
    REFERENCES `mydb`.`datafile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_collection_access1`
    FOREIGN KEY (`access_role_id` , `access_action_id`)
    REFERENCES `mydb`.`access` (`role_id` , `action_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'UserAuth');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'UserCreate');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'DataDownload');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'DataSearch');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'DataUpload');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'DataFilter');
INSERT INTO `mydb`.`action` (`id`, `name`) VALUES (DEFAULT, 'DataDelete');
COMMIT;

START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`datafile` (`id`, `name`, `description`, `upload_date`, `file_type`) VALUES (DEFAULT, '/mnt/2022/ukraine_tax_stat', 'Stat about ukrainian taxpayers', '2022-10-02', 'csv');
INSERT INTO `mydb`.`datafile` (`id`, `name`, `description`, `upload_date`, `file_type`) VALUES (DEFAULT, '/mnt/2022/poland_tax_stat', 'Stat about polish taxpayers', '2022-11-02', 'json');
INSERT INTO `mydb`.`datafile` (`id`, `name`, `description`, `upload_date`, `file_type`) VALUES (DEFAULT, '/mnt/2022/ukr_crime_stat', 'Stat about crimerate in UKR', '2022-9-02', 'csv');
INSERT INTO `mydb`.`datafile` (`id`, `name`, `description`, `upload_date`, `file_type`) VALUES (DEFAULT, '/mnt/2022/pol_crime_stat', 'Stat about crimerate in POL', '2022-8-02', 'json');
COMMIT;

START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`) VALUES (1, 'Guest');
INSERT INTO `mydb`.`role` (`id`, `name`) VALUES (2, 'Administrator');
INSERT INTO `mydb`.`role` (`id`, `name`) VALUES (3, 'Authorized user');
COMMIT;

START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `username`, `email`, `password`, `role_id`) VALUES (DEFAULT, 'tvytvytskyi', 'tvytvytskyi@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 3);
INSERT INTO `mydb`.`user` (`id`, `username`, `email`, `password`, `role_id`) VALUES (DEFAULT, 'odyshkantiuk', 'odyshkantiuk@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 3);
INSERT INTO `mydb`.`user` (`id`, `username`, `email`, `password`, `role_id`) VALUES (DEFAULT, 'diliyov', 'diliyov@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 3);
INSERT INTO `mydb`.`user` (`id`, `username`, `email`, `password`, `role_id`) VALUES (DEFAULT, 'omaksymenko', 'omaksymenko@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 3);
COMMIT;
```

- RESTfull сервіс для управління даними
```
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// Define routes
app.get('/actions', (req, res) => {
  // Fetch all users from the database
  connection.query('SELECT * FROM action', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/datafiles', (req, res) => {
  // Fetch all users from the database
  connection.query('SELECT * FROM datafile', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/users', (req, res) => {
  // Fetch all users from the database
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/roles', (req, res) => {
  // Fetch all users from the database
  connection.query('SELECT * FROM role', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// req.query contains all params supplied in POST request
app.post('/users', (req, res) => {
  console.log("Debug print:", req.query);
  const { username, email, passwd, role_id } = req.query;
  
  // Insert a new user into the database
  connection.query(
    'INSERT INTO user (id, username, email, password, role_id) VALUES (DEFAULT, ?, ?, ?, ?)',
    [username, email, passwd, role_id],
    (err, results) => {
      if (err) throw err;
      res.json({ message: 'User created successfully!' });
    }
  );
});

app.post('/datafiles', (req, res) => {
  console.log("Debug print:", req.query);
  const { name, description, upload_date, file_type } = req.query;
  
  // Insert a new user into the database
  connection.query(
    'INSERT INTO datafile (id, name, description, upload_date, file_type) VALUES (DEFAULT, ?, ?, ?, ?)',
    [name, description, upload_date, file_type],
    (err, results) => {
      if (err) throw err;
      res.json({ message: 'Datafile created successfully!' });
    }
  );
});

app.delete('/datafiles', (req, res) => {
  console.log("Debug print:", req.query);
  const { name } = req.query;
  
  // Insert a new user into the database
  connection.query(
    'DELETE FROM datafile WHERE name=?;',
    [name],
    (err, results) => {
      if (err) throw err;
      res.json({ message: 'Datafile deleted successfully!' });
    }
  );
});

app.delete('/users', (req, res) => {
  console.log("Debug print:", req.query);
  const { username } = req.query;
  
  // Insert a new user into the database
  connection.query(
    'DELETE FROM user WHERE username=?;',
    [username],
    (err, results) => {
      if (err) throw err;
      res.json({ message: 'User deleted successfully!' });
    }
  );
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


```
