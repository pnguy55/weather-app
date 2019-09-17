//the following from from the api-key js files
const weather_lookup = require('./modules/weather-lookup')
//imports
const chalk = require('chalk')
//const yargs = require('yargs')

// yargs.command({
//     command: 'weather',
//     describe: chalk.red('Get the weather for a city'),
//     builder: {
//         city: {
//             describe: chalk.red('City name'),
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         weather_lookup(argv.city)
//     }
// })
// yargs.parse()

let city = process.argv[2]
if (!city){
    console.log(chalk.red('\nPlease provide a city. \nSample input: ') + chalk.bgRed.black('node app.js "Baton Rouge"') + '\n')
} else {
    weather_lookup(city)
}

