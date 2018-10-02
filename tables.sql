
create table plates (
	id serial not null primary key,
    code text not null,
	registration text not null

);

create table cities (
	id serial not null primary key,
	city text not null,
	code text not null
);

insert into cities (city, code) values('Cape Town', 'CA');
insert into cities (city, code) values('Paarl', 'CJ');
insert into cities (city, code) values('Bellville', 'CY');
insert into cities (city, code) values('Somerset West', 'CFM');
insert into cities (city, code) values('Ceres', 'CT');
insert into cities (city, code) values('Stellenbosch', 'CL');
insert into cities (city, code) values('Malmesbury', 'CK');