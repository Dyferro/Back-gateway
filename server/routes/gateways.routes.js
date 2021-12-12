const { Router } = require('express');
const router = Router();

const gatewaysController = require('../controllers/gateways.controller');

//GATEWAYS CRUD
router.get('/', gatewaysController.getGateways);
router.post('/', gatewaysController.createGateway);
router.get('/:id', gatewaysController.getGateway);

router.put('/:id', gatewaysController.updateGateway);
router.delete('/:id', gatewaysController.deleteGateway);


module.exports = router;