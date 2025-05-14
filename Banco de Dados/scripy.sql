create database projetoIndividual;
use projetoIndividual;

create table usuario(
	id int not null primary key auto_increment,
	nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table dashBoard(
	id int not null primary key auto_increment,
    assertividade varchar(45)
);


select * from dashboard;

select * from usuario;

truncate table usuario;

drop database projetoIndividual;

