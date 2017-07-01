const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PointSchema = new Schema({
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }
});

const DriverSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    },
    geometry: PointSchema
});

module.exports = mongoose.model('driver', DriverSchema);