// config/database.js
const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306, // Port par défaut de MySQL
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err);
    } else {
        console.log("Connexion réussie à la base de données");
        connection.release(); // Relâcher la connexion si elle est réussie
    }
});

module.exports = pool.promise();