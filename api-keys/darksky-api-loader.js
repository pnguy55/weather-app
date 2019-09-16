let request = require('request')
let api_key_getter = require('./api-key-getter')

let loaded_api_keys = api_key_getter.api_key_getter()
let darksky_key = loaded_api_keys[0].darksky

let darksky_api_url = 'https://api.darksky.net/forecast/'+ darksky_key +'/37.8267,-122.4233'
let darksky_data

let darksky_api_loader = () => {

    request(darksky_api_url, function(error, response, body){ 
        
        let bodyString = body.toString()
        
        darksky_data_JSON = JSON.parse(bodyString) 
        console.log(darksky_data_JSON['currently'])
    })
    
}

module.exports = darksky_api_loader