const temperaturaController={};
const conexion = require("../database");
temperaturaController.getSensores = async(req, res) =>
{
    const temperatura = await conexion.query("SELECT * FROM fact_casa;");
    res.json(temperatura.rows);
}

temperaturaController.setSensores = async(req, res) =>
{
    res.send(req.body);
    console.log(req.body);
    /*let resultados = await conexion.query(`insert into productos
        (nombre, precio)
        values
        ($1, $2)`, [nombre, precio]);
        return resultados;
        */
}

module.exports = temperaturaController;