const db = require('../database/db');
const { v4: uuidv4 } = require('uuid');

const insertarProyecto = async (datosProyecto, idAutora) => {
  const uuid = uuidv4();

  const consultaProyecto = `
    INSERT INTO proyectos (uuid, nombre, descripcion, tecnologias, imagen, github, demo, autora_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const valoresProyecto = [
    uuid,
    datosProyecto.nombre,
    datosProyecto.descripcion,
    datosProyecto.tecnologias,
    datosProyecto.imagen,
    datosProyecto.github,
    datosProyecto.demo,
    idAutora
  ];

  await db.execute(consultaProyecto, valoresProyecto);

  return uuid;
};

const insertarAutora = async (datosAutora) => {
  const consultaAutora = `
    INSERT INTO autoras (nombre, promocion, trabajo, foto, descripcion)
    VALUES (?, ?, ?, ?, ?)
  `;

  const valoresAutora = [
    datosAutora.nombre,
    datosAutora.promocion,
    datosAutora.trabajo,
    datosAutora.foto,
    datosAutora.descripcion
  ];

  const [resultado] = await db.execute(consultaAutora, valoresAutora);

  return resultado.insertId; };

const obtenerProyectos = async () => {
  const consulta = `
    SELECT 
      p.uuid, p.nombre AS nombre_proyecto, p.descripcion, p.tecnologias, p.imagen, p.github, p.demo,
      a.nombre AS nombre_autora, a.promocion, a.trabajo, a.foto, a.descripcion AS descripcion_autora
    FROM proyectos p
    JOIN autoras a ON p.autora_id = a.id
  `;

  const [proyectos] = await db.execute(consulta);
  return proyectos;
};

const obtenerProyectoPorUUID = async (uuid) => {
  const consulta = `
    SELECT 
      p.uuid, p.nombre AS nombre_proyecto, p.descripcion, p.tecnologias, p.imagen, p.github, p.demo,
      a.nombre AS nombre_autora, a.promocion, a.trabajo, a.foto, a.descripcion AS descripcion_autora
    FROM proyectos p
    JOIN autoras a ON p.autora_id = a.id
    WHERE p.uuid = ?
  `;

  const [resultados] = await db.execute(consulta, [uuid]);
  return resultados[0];
};

module.exports = {
  insertarProyecto,
  insertarAutora,
  obtenerProyectos,
  obtenerProyectoPorUUID,
};
