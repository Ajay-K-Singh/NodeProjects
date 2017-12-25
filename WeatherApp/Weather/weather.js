const request = require('request');

const getWeather = (lat, lng) => {
    request({
        url: `https://api.darksky.net/forecast/419c26784103f62210acf9c0df7579ff/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('unable to connect forecast.io servers');
        } else if (response.statusCode === 400) {
            console.log('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            console.log(body.currently.temperature);
        }
    });
};

module.exports.getWeather = getWeather;