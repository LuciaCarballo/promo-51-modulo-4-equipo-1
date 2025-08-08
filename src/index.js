const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

// const projectRoutes = require('./routes/projectRoutes');

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3000; // el puerto

// aquí escucha al puerto y nos da en consola el enlace donde podemos "verlo"
server.listen(PORT, () => {
  console.log(
    `Servidor escuchando en puerto ${PORT}, http://localhost:${PORT}`
  );
});

//esto comentado abajo lo haremos cuando hagamos los archivos controllers, routes, db, models >>>
// server.use('/api', projectRoutes);
//console.log("Usuario de la base de datos:", process.env.DB_USER);
// const db = require('./db');

const getConnection = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
};

// ver api proyectos
server.get("/proyectos", async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query(
      "SELECT * FROM defaultdb.proyectos"
    );
    await connection.end();
    res.status(200).json({
      info: { count: result.length },
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ver api autoras
server.get("/autoras", async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query("SELECT * FROM defaultdb.authors");
    await connection.end();
    res.status(200).json({
      info: { count: result.length },
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ver api de un proyecto concreto según su autora (a futuro añadir datos autora?)
server.get("/proyectos/:idAuthor", async (req, res) => {
  const id = req.params.id;
  try {
    const connection = await getConnection();
    const [result] = await connection.query(
      "SELECT * FROM defaultdb.proyectos WHERE proyectos.id_author  = ?;",
      [id]
    );
    await connection.end();

    const name = result[0].personaje;

    if (result.length === 0) {
      return res.status(404).json({ error: "frase no encontrada" });
    }
    res.status(200).json({
      "ID del personaje": id,
      personaje: name,
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// SUBIR PROYECTO Y AUTORA

server.post("/subir-proyecto", async (req, res) => {
  const { authorName, job, authorPhoto } = req.body;

  const {
    projectName,
    slogan,
    repo,
    demo,
    technologies,
    description,
    projectPhoto,
  } = req.body;

  try {
    const connection = await getConnection();
    const [resultAuthor] = await connection.query(
      "INSERT INTO defaultdb.authors (authorName, job, authorPhoto) VALUES (?,?,?);",
      [authorName, job, authorPhoto]
    );

    const [resultProject] = await connection.query(
      "INSERT INTO defaultdb.proyectos (projectName, slogan, repo, demo, technologies, description, projectPhoto, id_author) VALUES (?,?,?,?,?,?,?,?);",
      [
        projectName,
        slogan,
        repo,
        demo,
        technologies,
        description,
        projectPhoto,
        resultAuthor.insertId,
      ]
    );
    await connection.end();
    if (!resultProject.insertId) {
      return res.status(500).json({ error: "información no encontrada" });
    }
    res.status(200).json({
      success: true,
      "id proyecto": resultProject.insertId,
      "id autora": resultAuthor.insertId,
    });
    console.log("autora: ", resultAuthor, "proyecto: ", resultProject);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* async function testDBConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('Conexión a la base de datos Aiven OK. Resultado:', rows[0].result);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  }
}

testDBConnection();
 */

// FALTA HACER: servidor estático (para que se vea la web en la página principal (la web está dentro de /web))
// const staticServerPath = "./src/web/dist";   // >>> dist no se ha creado (npm run build)
// server.use(express.static(staticServerPath));/*

const path = require("path");

const staticServerPath = path.join(__dirname, "../web/dist");
server.use(express.static(staticServerPath));

// Para que React maneje las rutas del frontend (SPA)
server.get("*", (req, res) => {
  res.sendFile(path.join(staticServerPath, "index.html"));
});
