const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

console.log("Usuario de la base de datos:", process.env.DB_USER);

const server = express();

server.use(cors());
server.use(express.json()); 
