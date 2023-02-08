const iluminacionController = {};
const conexion = require("../database");
iluminacionController.getIluminacion = async (req, res) => {
  const temperatura = await conexion.query("SELECT * FROM dim_iluminacion;");
  res.json(temperatura.rows);
};

iluminacionController.setIluminacion = async (req, res) => {
  let resultado = await conexion.query(
    'select sk_iluminacion + 1 "sk_iluminacion", pk_iluminacion + 1 "pk_iluminacion" from dim_iluminacion order by sk_iluminacion desc, pk_iluminacion desc limit 1;'
  );
  let sk_ilu = resultado.rows[0].sk_iluminacion.toString();
  let pk_ilu = resultado.rows[0].pk_iluminacion.toString();
  let resultados = await conexion.query(
    `insert into dim_iluminacion
    (sk_iluminacion, pk_iluminacion, estado_iluminacion, fecha, hora, id_sensor)
        values
        ($1, $2, $3, $4, $5, $6)`,
    [sk_ilu, pk_ilu, req.body.DATO2, req.body.fecha, req.body.hora, "3"]
  );
  insertFactCasa(sk_ilu, req.body.LUM);
};

async function insertFactCasa(sk_iluminacion, lum){
  let resultados = await conexion.query(
    `insert into fact_casa
    (sk_temperatura, sk_iluminacion, sk_garaje, sk_sensores, valor_temperatura, humedad, intensidad_luminica)
        values
        ($1, $2, $3, $4, $5, $6, $7)`,
        ["1", sk_iluminacion, "1", "3", "25", "54.40", lum]
  );
}

module.exports = iluminacionController;
