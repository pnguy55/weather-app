//the following from from the api-key js files
const geocode_api_loader = require('../api-keys/geocode-api-loader')
const darksky_api_loader = require('../api-keys/darksky-api-loader')
//imports
const chalk = require('chalk')

//darksky_api_loader()
let weather_lookup = (city) => {
    geocode_api_loader(city, (error, lat_and_long) => {
        if (error) {
            console.log(chalk.red('\n' + error + '\n'))
        } else {
            darksky_api_loader(lat_and_long, (error, daily, currently) => {
                if (error) {
                    console.log(chalk.red('\n' + error + '\n'))
                } else {
                    console.log('\n' + chalk.green(daily.data[0].summary + " It is currently " + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.\n'))
                }
            })
        }
    })
}
module.exports = weather_lookup