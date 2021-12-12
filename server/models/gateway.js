const { Schema, model } = require('mongoose');


const gatewaySchema = new Schema({
    serial_number: { type: String, required: true },
    hr_name: { type: String, required: true },
    ip_address: { type: String, required: true },
    associated_peripheral: [{ type: Object, required: true }],
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Gateway', gatewaySchema);