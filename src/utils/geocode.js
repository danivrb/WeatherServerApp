const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiZGFuaXZyYiIsImEiOiJjbHYzbm11OWowcmUzMmtwMHBhaTc1Y3A4In0.GCrDxL7wFC17aH4eyZAx0w&limit=1'
    request({url: url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to location services!')
        }else if (body.features.length === 0 ) {
                callback('Unable to find location. Try another search')
        }else {
            callback(undefined, {
                latitude: body.features[0].properties.coordinates.latitude,
                longitude: body.features[0].properties.coordinates.longitude,
                location: body.features[0].properties.full_address
            })
        }
    })
}




module.exports = geocode