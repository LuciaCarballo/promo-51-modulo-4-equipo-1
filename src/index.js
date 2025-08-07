const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const projectRoutes = require('./routes/projectRoutes');

const server = express();

server.use(cors());
server.use(express.json()); 

server.use('/api', projectRoutes);

console.log("Usuario de la base de datos:", process.env.DB_USER);

const db = require('./db');

async function testDBConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('Conexión a la base de datos Aiven OK. Resultado:', rows[0].result);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  }
}

testDBConnection();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

