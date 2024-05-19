const request = require('request')

const forecast = (lat,long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=YOUR-ACCES-KEY-FROM-WEATHERSTACK='+ lat +','+ long
    request ( { url, json: true}, (error,{ body }) => {
        if (error){
            callback('Unable to connect to the service')
        }else if (body.error){
            callback('Unable to find location, please try again')
        }else {
            callback(undefined, 
                body.current.weather_descriptions[0] + '.  It is currently '+ body.current.temperature + " degress out. It feels like  " + body.current.feelslike + " degrees"
            )
        }
    })

}



module.exports = forecast
