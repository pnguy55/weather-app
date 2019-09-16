let api_key_getter = require('./api-key-getter')

let loaded_api_keys = api_key_getter.api_key_getter()
let google_geocode_key = loaded_api_keys[0].google_geocode

let geocode_api_loader = (cityName) => {
    let formattedCityName = cityName.replace(' ','+')
    let request_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ formattedCityName+'&key='+google_geocode_key

}

module.exports = { geocode_api_loader: geocode_api_loader }