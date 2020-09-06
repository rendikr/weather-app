const request = require('postman-request')

const weatherUrl = 'http://api.weatherstack.com/current?access_key=5ec956c24e2a6a7adb9c59ce3cb09e03&query=37.8267,-122.4233'

request({url: weatherUrl, json: true}, (err, response) => {
  const data = response.body.current
  console.log('It is currently ' + data.temperature + ' degrees out and feels like ' + data.feelslike + ' degrees')
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Jakarta.json?limit=1&access_token=pk.eyJ1IjoiZ2hpam9vbiIsImEiOiJjazEwa2V0MXYwNnJwM2JteWhiZmY1anNpIn0.MgqLIiJYw1259w5n_vbA_A'

request({ url: geocodeUrl, json: true}, (err, response) => {
  const data = response.body.features[0]
  console.log('The latitude and longitude for ' + data.place_name + ' are Lat: ' + data.center[1] + ' and Lon: ' + data.center[0])
})
