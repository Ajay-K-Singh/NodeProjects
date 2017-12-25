var request = require('request');

var geoCodeRequest = (address) => {
    const encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Something wrong with google servers. Mind if I take a couple of time to fix this.')
            return;
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find the address');
        } else if (body.status === 'OK') {
            const addressObject = {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            }
            return addressObject;
        }
    });
};

module.exports.geoCodeRequest = geoCodeRequest;