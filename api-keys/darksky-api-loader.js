//imports
let request = require('request')
let chalk = require('chalk')
let api_key_getter = require('./api-key-getter')
//global variables
let loaded_api_keys = api_key_getter()
let darksky_key = loaded_api_keys[0].darksky
//function that requests data from the darksky API
let darksky_api_loader = (lat_and_long, callback) => {
    //url variable
    let darksky_api_url = 'https://api.darksky.net/forecast/'+ darksky_key + lat_and_long

    request({url:darksky_api_url, json: true}, (error, response) => { 
        if (error) {
            console.log(chalk.red('Unable to connect to weather service'))
        } else if (response.body.error) { 
            console.log(chalk.red('Unable to show location'))
        } else {
            let body = response.body

            callback(body)
        }
    })
    
}
//exports
module.exports = darksky_api_loader