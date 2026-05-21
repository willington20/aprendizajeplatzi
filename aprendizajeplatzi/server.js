const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cafeteria_db"
});

db.connect(err => {
    if(err){
        console.log(err);
    } else {
        console.log("MySQL conectado");
    }
});


// ======================================
// OBTENER PRODUCTOS
// ======================================

app.get("/productos", (req, res) => {

    const sql = "SELECT * FROM productos";

    db.query(sql, (err, result) => {

        if(err){
            res.status(500).json(err);
        } else {
            res.json(result);
        }

    });

});


// ======================================
// CREAR PRODUCTO
// ======================================

app.post("/productos", (req, res) => {

    const {nombre, descripcion, precio, imagen, categoria, stock} = req.body;

    const sql = `
    INSERT INTO productos
    (nombre, descripcion, precio, imagen, categoria, stock)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nombre, descripcion, precio, imagen, categoria, stock],
        (err, result) => {

            if(err){
                res.status(500).json(err);
            } else {
                res.json({
                    message: "Producto creado"
                });
            }

        }
    );

});


// ======================================
// ACTUALIZAR PRODUCTO
// ======================================

app.put("/productos/:id", (req, res) => {

    const {id} = req.params;

    const {nombre, descripcion, precio} = req.body;

    const sql = `
    UPDATE productos
    SET nombre=?, descripcion=?, precio=?
    WHERE id=?
    `;

    db.query(
        sql,
        [nombre, descripcion, precio, id],
        (err, result) => {

            if(err){
                res.status(500).json(err);
            } else {
                res.json({
                    message: "Producto actualizado"
                });
            }

        }
    );

});


// ======================================
// ELIMINAR PRODUCTO
// ======================================

app.delete("/productos/:id", (req, res) => {

    const {id} = req.params;

    const sql = "DELETE FROM productos WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if(err){
            res.status(500).json(err);
        } else {
            res.json({
                message: "Producto eliminado"
            });
        }

    });

});


// ======================================

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});