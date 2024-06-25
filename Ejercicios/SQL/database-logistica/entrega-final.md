1. Crear base de datos

```
create finallogistica
```

2. Comprobamos que se creó la base de datos

```
show databases;
```

3. Elegir la base de datos que vamos a utilizar

```
use finallogistica
```

4. Crear tablas:

   - Tabla de camiones

   ```
   create table camiones(
       idMatricula char(10) not null,
       modelo varchar(30) not null,
       potencia float unsigned,
       tipo enum("Moto", "Coche", "Camion"),

       primary key(idMatricula)
   );
   ```

   Comprobamos si se creó la tabla:

   ```
   show tables
   ```

   Vemos el contenido de la tabla:

   ```
   describe camiones
   ```

   - Tabla camioneros

   ```
   create table camioneros(
       idDNI char(9) not null,
       nombre varchar(50) not null,
       telefono varchar(15) not null,
       poblacion varchar(255) not null,
       salario float unsigned default 1000,

       primary key(idDNI)
       );
   ```

   - Tabla provincias

   ```
   create table provincias(
       idCP int(5) unsigned not null,
       nombre varchar(255) not null unique,

       primary key(idCP)
    );
   ```

   - Tabla paquetes

   ```
    create table paquetes(
        idPaquete int unsigned,
        codCP int(5) unsigned not null,
        codDNI char(10) not null,
        descripcion varchar(300),
        destinatario char(100),
        direccion char(255),

        primary key(idPaquete),
        foreign key(codCP) references provincias(idCP),
        foreign key(codDNI) references camioneros(idDNI)
    );
   ```

   - Tabla conducir

   ```
    create table conducir(
        idConducir int unsigned not null,
        codDNI char(10) not null,
        codMatricula char(10) not null,
        fecha date,

        primary key(idConducir),
        foreign key(codMatricula) references camiones(idMatricula),
        foreign key(codDNI) references camioneros(idDNI)
    );
   ```

5. Agregar datos a las tablas:

- Camiones:

```
insert into camiones values
("4675AFG", "Mercedes", 130, "Camion"),
("3890DVB", "Ford", 120, "Coche"),
("8532MFK", "BMW", 160, "Coche"),
("3960HJK", "Mercedes", 110, "Moto"),
("7751DCX", "Ford", 160, "Camion"),
("0085HDP", "Fiat", 130, "Camion"),
("6008POT", "Mercedes", 200, "Camion"),
("5449LMA", "Yamaha", 150, "Moto"),
("8626DSL", "Ford", 300, "Camion"),
("0464ACM", "Tesla", 400, "Coche");
```

- Camioneros:

```
insert into camioneros values
("67734190T", "Ainhoa", 677546900, "Albacete", 3000),
("38674498J", "Rodrigo", 688435790, "Alicante", 2000),
("56893660L", "Roberto", 699756801, "Valencia", 1200),
("42678461K", "Ricardo", 665344189, "Madrid", 1200),
("42673308D", "Lucio", 866457790, "Madrid", 1000),
("66520961J", "Matias", 633578479, "Albacete", 3000),
("77620843M", "Florencia", 697546723, "Alicante", 2500),
("12265890X", "Tomas", 679006523, "Barcelona", 2800),
("55483900X", "Bernardo", 677908066, "Barcelona", 1900),
("26539677K", "Juan", 675443879, "Albacete", 2500);
```

- Provincias:

```
insert into provincias values
(10001, "Alicante"),
(10002, "Albacete"),
(10003, "Valencia"),
(10004, "Madrid"),
(10005, "Barcelona");
```

- Paquetes:

```
insert into paquetes values
(1, "10001", "677
34190T", "Paquete 1", "Juan Pedro", "Calle Alicante 103"),
(2, "10001", "38674498J", "Paquete 2", "Jose", "Direccion 2"),
(3, "10002", "67734190T", "Paquete 3", "Rodrigo", "Direccion 3"),
(4, "10003", "42678461K", "Paquete 4", "Marcos", "Direccion 4"),
(5, "10004", "42673308D", "Paquete 5", "Ainhoa Perez", "Direccion 5"),
(6, "10005", "67734190T", "Paquete 6", "Jorge Manuel", "Direccion 6"),
(7, "10002", "77620843M", "Paquete 7", "Roberto Andres", "Direccion 7"),
(8, "10002", "38674498J", "Paquete 8", "Leyre", "Direccion 8"),
(9, "10004", "66520961J", "Paquete 9", "Juan Manuel", "Direccion 9"),
(10, "10002", "26539677K", "Paquete 10", "Pedri", "Direccion 10");
```

- Conducir:

```
insert into conducir values
(1, "67734190T", "0464ACM", "2024-06-20"),
(2, "38674498J", "4675AFG", "2024-07-22"),
(3, "67734190T", "0085HDP", "2024-04-10"),
(4, "42678461K", "6008POT", "2024-05-14"),
(5, "42673308D", "5449LMA", "2024-04-10"),
(6, "67734190T", "0464ACM", "2024-04-04"),
(7, "77620843M", "8532MFK", "2024-08-03"),
(8, "38674498J", "8626DSL", "2024-10-21"),
(9, "66520961J", "0085HDP", "2024-12-08"),
(10, "26539677K", "0464ACM", "2024-11-09");
```