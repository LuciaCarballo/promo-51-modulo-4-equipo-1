DROP TABLE IF EXISTS proyectos;
DROP TABLE IF EXISTS autoras;

CREATE TABLE autoras (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  profesion VARCHAR(100),
  foto VARCHAR(255),
  promocion VARCHAR(50)
);

CREATE TABLE proyectos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  titulo VARCHAR(200) NOT NULL,
  eslogan VARCHAR(255),
  descripcion TEXT,
  tecnologias VARCHAR(255),
  demo VARCHAR(255),
  repositorio VARCHAR(255),
  autora_id INT,
  FOREIGN KEY (autora_id) REFERENCES autoras(id)
);
