//the following from from the api-key js files
let geocode_api_loader = require('./api-keys/geocode-api-loader')
let darksky_api_loader = require('./api-keys/darksky-api-loader')

// the following are ad-hok for the course
let request = require('request')
let api_key_getter = require('./api-keys/api-key-getter')

// temp ad-hok variables
let loaded_api_keys = api_key_getter.api_key_getter()
let darksky_key = loaded_api_keys[0].darksky
let darksky_api_url = 'https://api.darksky.net/forecast/'+ darksky_key +'/37.8267,-122.4233'


// temp req function
request({url:darksky_api_url, json: true}, (error, response) => { 
        
    let currently = response.body.currently
    let daily = response.body.daily
    console.log(daily.data[0].summary + " It is currently " + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain.')
})