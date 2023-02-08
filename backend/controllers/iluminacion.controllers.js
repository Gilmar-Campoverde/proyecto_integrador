const iluminacionController={};
const conexion = require("../database");
iluminacionController.getIluminacion = async(req, res) =>
{
    const temperatura = await conexion.query("SELECT * FROM dim_iluminacion;");
    res.json(temperatura.rows);
}

iluminacionController.setIluminacion = async(req, res) =>
{
    
}

module.exports = iluminacionController;