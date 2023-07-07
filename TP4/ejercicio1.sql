CREATE TABLE ALUMNO (
  cod_matricula INT PRIMARY KEY,
  nombre VARCHAR(50),
  dni VARCHAR(10),
  fecha_nac DATE,
  email VARCHAR(50)
);
INSERT INTO ALUMNO (cod_matricula, nombre, dni, fecha_nac, email)
VALUES
  (1, 'Juan Pérez', '12345678', '2000-01-01', 'juan157@gmail.com'),
  (2, 'María López', '87654321', '1999-02-02', 'marialopez@gmail.com'),
  (3, 'Pedro Gómez', '13579246', '2001-03-03', 'pedrousuario@gmail.com');
CREATE TABLE CURSO (
  cod_curso INT PRIMARY KEY,
  nombre VARCHAR(50)
);
INSERT INTO CURSO (cod_curso, nombre)
VALUES
  (1, 'Estadistica'),
  (2, 'Inmunizaciones'),
  (3, 'Inglés');
CREATE TABLE PROFESOR (
  profesor_id INT PRIMARY KEY,
  nombre VARCHAR(50),
  especialidad VARCHAR(50),
  email VARCHAR(50)
);
INSERT INTO PROFESOR (profesor_id, nombre, especialidad, email)
VALUES
  (1, 'Antonella Halty', 'Estadistica', 'antonellahalty@gmail.com'),
  (2, 'María Gonzalez', 'Inmunizaciones', 'mariainmunizaciones@gmail.com'),
  (3, 'Leandro Torres', 'Inglés', 'leandrotorres@gmail.com');
