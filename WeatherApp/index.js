const yargs = require('yargs');
const geoCode = require('./Geocode/geocode.js');
const weather = require('./Weather/weather.js');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Tell me address I ll tell you about weather there!',
            string: true
        }
    })
    .help().alias('help', 'h').argv;

geoCode.geoCodeRequest(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherresults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(weatherresults.temperature);
            }
        });
    }

});



//419c26784103f62210acf9c0df7579f