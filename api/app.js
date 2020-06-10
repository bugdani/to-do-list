const express = require("express");
const app = express();

/**
 * Get /lists
 * Proposito: Devuelve todas las listas
 */
app.get("/lists", (req, res) => {});

/**
 * Post /lists
 * Proposito: Para crear una nueva lista
 */
app.post("/lists", (req, res) => {});

/**
 * Path /lists
 * Proposito: Para modificar una lista especifica
 */
app.path("/lists/:id", (req, res) => {});

app.listen(3000, () => {
    console.log("El servidor ya esta escuchando peticiones!! ;) ");
});