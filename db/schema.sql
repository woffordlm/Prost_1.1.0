drop database if exists cocktails;
CREATE DATABASE cocktails;
USE cocktails;

CREATE TABLE cocktail_list(
id INTEGER NOT NULL auto_increment primary KEY, 
name VARCHAR(100) NOT NULL,
category VARCHAR(100) NOT NULL,
measurement_1 VARCHAR(100) NOT NULL,
ingredient_1 VARCHAR(100) NOT NULL,
measurement_2 VARCHAR(100) NOT NULL,
ingredient_2 VARCHAR(100) NOT NULL,
measurement_3 VARCHAR(100) NOT NULL,
ingredient_3 VARCHAR(100) NOT NULL,
measurement_4 VARCHAR(100) NOT NULL,
ingredient_4 VARCHAR(100) NOT NULL,
measurement_5 VARCHAR(100) NOT NULL,
ingredient_5 VARCHAR(100) NOT NULL,
measurement_6 VARCHAR(100) NOT NULL,
ingredient_6 VARCHAR(100) NOT NULL,
instructions VARCHAR(1000) NOT NULL,
glass VARCHAR(100) NOT NULL,
glass_size VARCHAR(100) NOT NULL
);
USE cocktails;
CREATE TABLE users(
id INTEGER NOT NULL auto_increment primary KEY,
user_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
);
USE cocktails;
CREATE TABLE comment(
id INTEGER NOT NULL auto_increment primary KEY,
comment_text VARCHAR(1000),
user_id INTEGER NOT NULL,
drink_id INTEGER NOT NULL
-- CONSTRAINT user_id_const FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
-- CONSTRAINT drink_id_const FOREIGN KEY (drink_id) REFERENCES cocktail_list(id)
);
USE cocktails;

CREATE TABLE starred_cocktails(
id INTEGER NOT NULL auto_increment primary KEY,
star_number INTEGER NOT NULL, 
user_id INTEGER NOT NULL,
drink_id INTEGER NOT NULL
-- CONSTRAINT user_const FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
-- CONSTRAINT drink_const FOREIGN KEY (drink_id) REFERENCES cocktail_list(id)
);




-- import data located in assets into cocktail_list  using important wizard,
-- make sure to import before seeding the data below

INSERT INTO `cocktails`.`users`
(`user_name`,`email`,`password`) VALUES('woffordlm','luke@gmail.com','password');
INSERT INTO `cocktails`.`users`
(`user_name`,`email`,`password`) VALUES('kana85','kana@gmail.com','password123');
INSERT INTO `cocktails`.`users`
(`user_name`,`email`,`password`) VALUES('demarco89','mike@gmail.com','password321');
INSERT INTO `cocktails`.`users`
(`user_name`,`email`,`password`) VALUES('elvis32','elvis@gmail.com','password45');
INSERT INTO `cocktails`.`users`
(`user_name`,`email`,`password`) VALUES('idared','ida@gmail.com','password54');

INSERT INTO `cocktails`.`comment`(`id`,`comment_text`,`user_id`,`drink_id`)
VALUES(1,"super tasty",1,1);
INSERT INTO `cocktails`.`comment`(`id`,`comment_text`,`user_id`,`drink_id`)
VALUES(2,"sorta tasty",2,2);
INSERT INTO `cocktails`.`comment`(`id`,`comment_text`,`user_id`,`drink_id`)
VALUES(3,"gross",3,3);
INSERT INTO `cocktails`.`comment`(`id`,`comment_text`,`user_id`,`drink_id`)
VALUES(4,"remminds me of my childhood",4,4);
INSERT INTO `cocktails`.`comment`(`id`,`comment_text`,`user_id`,`drink_id`)
VALUES(5,"reminds me of my 21st",5,5);

INSERT INTO `cocktails`.`starred_cocktails`(`id`,`star_number`,`user_id`,`drink_id`)
VALUES(1,5,1,1);
INSERT INTO `cocktails`.`starred_cocktails`(`id`,`star_number`,`user_id`,`drink_id`)
VALUES(2,4,2,2);
INSERT INTO `cocktails`.`starred_cocktails`(`id`,`star_number`,`user_id`,`drink_id`)
VALUES(3,4,3,3);
INSERT INTO `cocktails`.`starred_cocktails`(`id`,`star_number`,`user_id`,`drink_id`)
VALUES(4,1,4,4);
INSERT INTO `cocktails`.`starred_cocktails`(`id`,`star_number`,`user_id`,`drink_id`)
VALUES(5,2,5,5);





