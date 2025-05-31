create database projetoIndividual;
use projetoIndividual;

create table usuario(
	id int not null primary key auto_increment,
	nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table blog(
	id int primary key auto_increment,
	fkusuario int,
    modelo varchar(100),
    ano int,
    preco int,
    potencia int,
    descricao varchar(100),
    img text,
    nomeUsuario varchar(100),
    constraint fk_usuario2 foreign key (fkusuario) references usuario(id)
);

create table listaDeChutes(
	id int primary key auto_increment,
	fkusuario int,
    img text,
    nomeCarro varchar(100),
    precoChutado int,
    precoReal int,
    assertividade int,
    constraint fk_usuario3 foreign key (fkusuario) references usuario(id)
);

select * from listaDeChutes where fkusuario = 1 order by id desc limit 10 ;
select count(id) from listaDeChutes where fkusuario = 2;

insert into blog(fkusuario, modelo, ano, preco, potencia, descricao, img, nomeUsuario) values
(1, "13123", 123, 123,123,"asdsa","3123","234");

select * from dashBoard;
select * from usuario;
select * from blog;
select * from listaDeChutes;

truncate table usuario;
truncate table dashBoard;
truncate table blog;

drop table blog;

drop database projetoIndividual;



