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

create table blog(
	fkusuario int,
    nome varchar(100),
    img text,
    descricao varchar(100),
    constraint fk_usuario2 foreign key (fkusuario) references usuario(id)
);


select * from dashBoard;
select * from usuario;
select * from blog;


truncate table usuario;
truncate table dashBoard;
truncate table blog;
drop database projetoIndividual;

insert into blog (fkusuario ,nome, img, descricao) values
(1, "rafael", "asdsaidhasdi", "dasijdhsaidashdusaid");

