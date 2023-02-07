const{Router} = require ('express');
const router=Router();

temperatura=require('../controllers/temperatura.controllers');

router.get('/', temperatura.getSensores);
router.post('/', temperatura.setSensores);

module.exports = router;