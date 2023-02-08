const temperaturaController={};
const conexion = require("../database");
temperaturaController.getTemperatura = async(req, res) =>
{
    const temperatura = await conexion.query("SELECT * FROM dim_temperatura;");
    res.json(temperatura.rows);
}

temperaturaController.setTemperatura = async(req, res) =>
{
    let estado = "";
    let temperatura = parseFloat(req.body.DATO3);
    if(temperatura < 25){
        estado = "FRIO";
    } else{
        estado = "CALIENTE";
    }
    
    let resultado = await conexion.query(
        'select sk_temperatura + 1 "sk_temperatura", pk_temperatura + 1 "pk_temperatura" from dim_temperatura order by sk_temperatura desc, pk_temperatura desc limit 1;'
      );
      let sk_temp = resultado.rows[0].sk_temperatura.toString();
      let pk_temp = resultado.rows[0].pk_temperatura.toString();
      let resultados = await conexion.query(
        `insert into dim_temperatura
        (sk_temperatura, pk_temperatura, id_sensor, estado_temperatura, fecha)
            values
            ($1, $2, $3, $4, $5)`,
        [sk_temp, pk_temp, "2", estado, req.body.fecha]
      );
      insertFactCasa(sk_temp, req.body.DATO3, req.body.HUM);
}

async function insertFactCasa(sk_temperatura, temperatura, humedad){
    let resultados = await conexion.query(
      `insert into fact_casa
      (sk_temperatura, sk_iluminacion, sk_garaje, sk_sensores, valor_temperatura, humedad, intensidad_luminica)
          values
          ($1, $2, $3, $4, $5, $6, $7)`,
          [sk_temperatura, "1", "1", "3", temperatura, humedad, "91"]
    );
  }

module.exports = temperaturaController;