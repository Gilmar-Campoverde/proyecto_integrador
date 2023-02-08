const garajeController = {};
const conexion = require("../database");
garajeController.getGaraje = async (req, res) => {
  let resultado = await conexion.query(
    "select * from dim_garaje;"
  );
  res.send(resultado.rows);
};

garajeController.setGaraje = async (req, res) => {
  let resultado = await conexion.query(
    "select sk_garaje + 1 \"sk_garaje\", pk_garaje + 1 \"pk_garaje\" from dim_garaje order by sk_garaje desc, pk_garaje desc limit 1;"
  );
  let sk_gar = resultado.rows[0].sk_garaje.toString();
  let pk_gar = resultado.rows[0].pk_garaje.toString();
  let resultados = await conexion.query(
    `insert into dim_garaje
        (sk_garaje, pk_garaje, id_sensor, estado_garaje, fecha, hora)
        values
        ($1, $2, $3, $4, $5, $6)`,
    [sk_gar, pk_gar, "1", req.body.DATO1, req.body.fecha, req.body.hora]
  );
  insertFactCasa(sk_gar);
};

async function insertFactCasa(sk_garaje){
  let resultados = await conexion.query(
    `insert into fact_casa
    (sk_temperatura, sk_iluminacion, sk_garaje, sk_sensores, valor_temperatura, humedad, intensidad_luminica)
        values
        ($1, $2, $3, $4, $5, $6, $7)`,
        ["1", "1", sk_garaje, "1", "25", "54.40", "91"]
  );
}

module.exports = garajeController;
