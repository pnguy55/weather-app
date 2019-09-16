//the following from from the api-key js files
let geocode_api_loader = require('./api-keys/geocode-api-loader')
let darksky_api_loader = require('./api-keys/darksky-api-loader')
//imports
let chalk = require('chalk')

// temp req function
console.log('\n')
//darksky_api_loader()
geocode_api_loader('Baton Rouge', (lat_and_long) => {
    darksky_api_loader(lat_and_long, (body) => {
        let daily = body.daily
        let currently = body.currently
        console.log(chalk.green(daily.data[0].summary + " It is currently " + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.'))
    })
})
