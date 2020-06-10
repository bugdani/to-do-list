const express = require("express");
const app = express();
const {} = require("./db/mongoose");

const bodyParser = require("body-parser");

//Importo los modelos para ser conmidos por los metodos
const { List, Task } = require("./db/model");

//
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id"
    );

    res.header(
        "Access-Control-Expose-Headers",
        "x-access-token, x-refresh-token"
    );

    next();
});

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
app.post("/lists", (req, res) => {
    let title = req.body.title;
    let newList = new List({
        title,
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    });
});

/**
 * Path /lists
 * Proposito: Para modificar una lista especifica
 */
app.patch("/lists/:id", (req, res) => {
    List.findOneAndUpdate({ _id: req.params.id }, {
            $set: req.body,
        })
        .then(() => {
            res.send({ message: "updated successfully" });
        })
        .catch((err) => {
            res.send({ message: err });
        });
});

/**
 * Delete /lists
 * Proposito: Para eliminar una lista especifica
 */
app.delete("/lists/:id", (req, res) => {
    List.findOneAndDelete({
        _id: req.params.id,
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    });
});

app.listen(3000, () => {
    console.log("El servidor ya esta escuchando peticiones!! ;) ");
});