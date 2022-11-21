CREATE DATABASE bdclinica if not exists;

use bdclinica;

CREATE TABLE medicamento (
    cod_medicamento int not null primary key,
    descripcion varchar(400) not null,
    formato varhcar(150) not null,
    stock int not null,
);

describe medicamento;

CREATE TABLE paciente (
    rut int not null primary key,
    nombre varchar(150) not null,
    fono varchar(150) not null,
    edad int not null,
    diagnostico varchar(400)
);

describe paciente;

CREATE TABLE receta (
    cod_receta int not null primary key;
    cantidad int not null,
    rut_paciente int not null,
    cod_medi int not null,
    createdAT TIMESTAMP default  current_timestamp,
    add constraint 'fk_rut_paciente' foreign key (rut_paciente)
        references paciente (rut),
    add constraint 'fk_cod_medi' foreign key (cod_medi)
        references medicamento (cod_medicamento)
);

describe receta;