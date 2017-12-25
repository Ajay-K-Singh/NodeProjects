var request = require('request');

var request = require('request');

var geoCodeRequest = (address) => {
    const encodedAddress = encodeURIComponent(argv.address);
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
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
}

module.exports = geoCodeRequest;