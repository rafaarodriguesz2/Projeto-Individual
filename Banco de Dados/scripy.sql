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
    assertividade varchar(45),
    fkusuario int,
    constraint fk_usuario foreign key (fkusuario) references usuario(id)
);

insert into dashBoard()

select assertividade from dashBoard;

select * from usuario;

truncate table usuario;
truncate table dashBoard;

drop database projetoIndividual;

