const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there' });
    },

    index(req, res, next) {
        // http://google.com?lng=80&lat=20
        const { lng, lat } = req.query;
        Driver.geoNear({ type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] }, { spherical: true, maxDistance: 200000 })
            .then((drivers) => res.send(drivers))
            .catch(next);
    },

    create(req, res, next) {
        Driver.create(req.body)
            .then(driver => res.send(driver))
            .catch(next);
    },

    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
            .then(() => Driver.findById({ _id: driverId }))
            .then(driver => res.send(driver))
            .catch(next);
    },

    delete(req, res, next) {
        Driver.findByIdAndRemove({ _id: req.params.id })
            .then((driver) => res.status(204).send(driver))
            .catch(next);
    }
};