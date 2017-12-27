var request = require('request');

var geoCodeRequest = (address) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Something wrong with google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geoCodeRequest = geoCodeRequest;