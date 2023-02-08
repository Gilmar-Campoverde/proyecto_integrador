const{Router} = require ('express');
const router=Router();

garaje=require('../controllers/garaje.controllers');

router.get('/', garaje.getGaraje);
router.post('/', garaje.setGaraje);

module.exports = router;