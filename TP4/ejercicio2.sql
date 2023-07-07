CREATE TABLE PAIS
(
  pais_id INT NOT NULL,
  nombre_pais INT NOT NULL,
  PRIMARY KEY (pais_id),
  UNIQUE (nombre_pais)
);
INSERT INTO PAIS (pais_id, nombre_pais)
VALUES
  (1, 'Argentina', 1),
  (2, 'Brasil', 1),
  (3, 'Uruguay', 2);
  
CREATE TABLE PROVINCIA
(
  Provincia_id INT NOT NULL,
  nombre_provincia INT NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (Provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id),
  UNIQUE (nombre_provincia)
);
INSERT INTO PROVINCIA (provincia_id, nombre_provincia, pais_id)
VALUES
  (1, 'Buenos Aires', 1),
  (2, 'Córdoba', 1),
  (3, 'Barcelona', 2);

CREATE TABLE LOCALIDAD
(
  codigo_localidad INT NOT NULL,
  nombre INT NOT NULL,
  codigo_postal INT NOT NULL,
  Provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (Provincia_id) REFERENCES PROVINCIA(Provincia_id),
  UNIQUE (codigo_postal)
);
INSERT INTO LOCALIDAD (codigo_localidad, nombre, codigo_postal, provincia_id)
VALUES
  (1, 'Puerto Rico', '3334', 1),
  (2, 'Posadas', '3300', 2),
  (3, 'Garupa', '3304', 3);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  Apellido_nombre INT NOT NULL,
  telefóno INT NOT NULL,
  email INT NOT NULL,
  fecha_alta INT NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad),
  UNIQUE (dni)
);
