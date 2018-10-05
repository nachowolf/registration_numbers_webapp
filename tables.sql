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
insert into cities (city, code) values('Bellville, Durbanville, Parow, Goodwood, Belhar, Montana, Charlesville, Valhalla Park', 'CY');
insert into cities (city, code) values('Somerset West', 'CFM');
insert into cities (city, code) values('Ceres', 'CT');
insert into cities (city, code) values('Stellenbosch, Franschhoek', 'CL');
insert into cities (city, code) values('Malmesbury, Darling', 'CK');
insert into cities (city, code) values('Kuils River, Brakenfell, Kraaifontein', 'CF');
insert into cities (city, code) values('Oudtshoorn', 'CG');
insert into cities (city, code) values('Calitzdorp', 'CO');
insert into cities (city, code) values('Hopefield, Langebaan, Langebaanweg', 'CR');
insert into cities (city, code) values('Bredasdorp, Napier', 'CS');
insert into cities (city, code) values('Vredendal', 'CV');
insert into cities (city, code) values('Worcester, De Doorns, Touws River', 'CW');
insert into cities (city, code) values('Knysna, Sedgefield, Plettenberg', 'CX');
insert into cities (city, code) values('Beaufort West', 'CZ');
insert into cities (city, code) values('Caledon, Kleinmond', 'CAM');
insert into cities (city, code) values('Clanwilliam, Lambert`s Bay, Citrusdal, Graafwater', 'CAR');
insert into cities (city, code) values('George', 'CAW');
insert into cities (city, code) values('Ladiesmith', 'CBL');
insert into cities (city, code) values('Laingsburg', 'CBM');
insert into cities (city, code) values('Montagu', 'CBR');
insert into cities (city, code) values('Mossel Bay, Hartenbos', 'CBS');
insert into cities (city, code) values('Murraysburg', 'CBT');
insert into cities (city, code) values('Piketberg', 'CBY');
insert into cities (city, code) values('Prince Albert', 'CCA');
insert into cities (city, code) values('Riversdale, Stillbaai','CCC');
insert into cities (city, code) values('Robertson, McGregor', 'CCD');
insert into cities (city, code) values('Swellendam, Barrydale', 'CCK');
insert into cities (city, code) values('Tulbagh', 'CCM');
insert into cities (city, code) values('Uniondale', 'CCO');
insert into cities (city, code) values('Vanrhynsdorp, Klawer', 'CCP');
insert into cities (city, code) values('City of Cape Town Municipal Vehicles', 'CCT');
insert into cities (city, code) values('Moorresburg', 'CEA');
insert into cities (city, code) values('Heidelberg', 'CEG');
insert into cities (city, code) values('Hermanus, Gansbaai, Onrus River, Stanford', 'CEM');
insert into cities (city, code) values('Grabouw', 'CEO');
insert into cities (city, code) values('Bonnievale', 'CER');
insert into cities (city, code) values('Albertinia', 'CES');
insert into cities (city, code) values('Porterville', 'CEX');
insert into cities (city, code) values('Strand, Gordan`s Bay', 'CEY');
insert into cities (city, code) values('Wolsey', 'CFA');
insert into cities (city, code) values('Vredenburg, Saldanha Bay, St Helena Bay', 'CFG');
insert into cities (city, code) values('Somerset West', 'CFM');
insert into cities (city, code) values('Velddrif, Laaiplek', 'CFP');