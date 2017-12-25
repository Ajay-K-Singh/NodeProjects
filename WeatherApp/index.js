const yargs = require('yargs');
const geoCode = require('./Geocode/geocode.js');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Addres for which weather you need',
            string: true
        }
    })
    .help().alias('help', 'h').argv;

geoCode.geoCodeRequest(argv.address);