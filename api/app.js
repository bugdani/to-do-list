const express = require("express");
const app = express();

//Importo los modelos para ser conmidos por los metodos
const { List, Task } = require("./db/model");
/**
 * Get /lists
 * Proposito: Devuelve todas las listas
 */
app.get("/lists", (req, res) => {
    List.find({}).then((lists) => {
        res.send(lists);
    });
});

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

/**
 * Delete /lists
 * Proposito: Para eliminar una lista especifica
 */
app.delete("/lists/:id", (req, res) => {});

app.listen(3000, () => {
    console.log("El servidor ya esta escuchando peticiones!! ;) ");
});