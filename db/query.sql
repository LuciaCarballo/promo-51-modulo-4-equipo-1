
use defaultdb;
 

CREATE TABLE `authors` (
  `id_author` INT NOT NULL AUTO_INCREMENT,
  `authorName` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45),
  `authorPhoto` LONGTEXT,
  PRIMARY KEY (`id_author`)
);

-- Tabla de proyectos con foreign key a authors
CREATE TABLE `proyectos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `projectName` VARCHAR(45),
  `slogan` VARCHAR(100),
  `repo` VARCHAR(100),
  `demo` VARCHAR(45),
  `technologies` VARCHAR(45),
  `description` TEXT,
  `projectPhoto` LONGTEXT,
  `id_author` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_proyectos_author`
    FOREIGN KEY (`id_author`)
    REFERENCES `authors` (`id_author`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


