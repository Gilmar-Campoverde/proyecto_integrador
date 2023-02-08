const garajeController = {};
const conexion = require("../database");
garajeController.getGaraje = async (req, res) => {
  let resultado = await conexion.query(
    "select * from dim_garaje;"
  );
  res.send(resultado.rows);
};

garajeController.setGaraje = async (req, res) => {
  console.log(req.body.DATO2 + "\n" + req.body.fecha + "\n" + req.body.hora);
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
    [sk_gar, pk_gar, "1", req.body.DATO2, req.body.fecha, req.body.hora]
  );
};

module.exports = garajeController;
