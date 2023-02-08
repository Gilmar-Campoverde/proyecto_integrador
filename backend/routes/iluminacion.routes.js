const{Router} = require ('express');
const router=Router();

iluminacion=require('../controllers/iluminacion.controllers');

router.get('/', iluminacion.getIluminacion);
router.post('/', iluminacion.setIluminacion);

module.exports = router;