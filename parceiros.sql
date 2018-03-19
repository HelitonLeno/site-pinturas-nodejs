create table pessoa (
	id int primary key not null auto_increment,
	nome varchar(60) not null,
	senha varchar(16) not null,
	saldo double(10,2) not null,
	datacadastro date not null
);

create table indicacao (
	id_pessoa int not null,
	nome varchar(60) not null,
	dataAtual date not null,
    recompensa double(10,2),
	constraint fk_pessoa foreign key(id_pessoa) REFERENCES pessoa (id)
);

insert into pessoa (nome, senha, saldo, datacadastro) values ('ton', '123', 5000, now());

insert into indicacao (id_pessoa, nome, dataAtual, recompensa) values (1, 'clodosvaldo', now(), 50);

SELECT pessoa.nome, pessoa.saldo, pessoa.datacadastro, indicacao.nome, indicacao.dataAtual, indicacao.recompensa 
FROM pessoa
INNER JOIN indicacao ON (pessoa.id = indicacao.id_pessoa)