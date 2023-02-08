const{Router} = require ('express');
const router=Router();

temperatura=require('../controllers/temperatura.controllers');

router.get('/', temperatura.getTemperatura);
router.post('/', temperatura.setTemperatura);

module.exports = router;