const gatewayController = {};
const Gateway = require('../models/gateway');


gatewayController.getGateways = async(req, res) => {
    const allGateways = await Gateway.find();
    res.json(allGateways);
};

gatewayController.createGateway = async(req, res) => {
    const newGateway = new Gateway(req.body);
    await newGateway.save();
    res.send({ message: 'Succesfully Created' });
};

gatewayController.getGateway = async(req, res) => {
    const findedGateway = await Gateway.findById(req.params.id);
    res.send(findedGateway);
};

gatewayController.updateGateway = async(req, res) => {
    await Gateway.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Succesfully Updated' });
};

gatewayController.deleteGateway = async(req, res) => {
    await Gateway.findByIdAndDelete(req.params.id);
    res.json({ status: 'Succesfully Deleted' });
};



module.exports = gatewayController;