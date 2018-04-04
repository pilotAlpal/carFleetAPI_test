'use strict';
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    name: {
        type: String,
        required:'Vehicle name'
    },
    position: {
        type: String,
	default: 'North'
    }
});

module.exports = mongoose.model('Vehicles', VehicleSchema);
