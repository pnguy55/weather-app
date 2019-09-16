let fs = require('fs')

let api_key_getter = () => {
    let api_key_buffer = fs.readFileSync('./api-keys/api-keys.json')
    let api_key_string = api_key_buffer.toString()
    let api_key_JSON = JSON.parse(api_key_string)
    return api_key_JSON
}

module.exports = { api_key_getter: api_key_getter }