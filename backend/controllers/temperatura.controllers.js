const temperaturaController={};
const conexion = require("../database");
temperaturaController.getTemperatura = async(req, res) =>
{
    const temperatura = await conexion.query("SELECT * FROM dim_temperatura;");
    res.json(temperatura.rows);
}

temperaturaController.setTemperatura = async(req, res) =>
{
    
}

module.exports = temperaturaController;