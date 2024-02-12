CREATE DATABASE db_todolist;
USE db_todolist;

CREATE TABLE Tasks (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255),
    DataCriacao DATETIME(6)
);

SELECT * FROM Tasks;