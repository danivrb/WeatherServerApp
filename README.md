# Weather App

### This is a simple localhost where you can type a location and the server will give you back informations about the weather.

### How it works: When you type a city in the search bar, that value will go to mapbox in order to find the coordonates for that location.After that, it will give this coordonates to the api weatherstack.
### From apiweatherstack you can select multiple informations about the weather. Down below, you can see what weatherstack is providing : 
	
#### **request**	
    type	"LatLon"
    query	"Lat 37.83 and Lon -122.42"
    language	"en"
    unit	"m"
#### **location**	
      name	"San Francisco"
      country	"United States of America"
      region	"California"
      lat	"37.775"
      lon	"-122.418"
      timezone_id	"America/Los_Angeles"
      localtime	"2024-05-19 12:44"
      localtime_epoch	1716122640
      utc_offset	"-7.0"
#### **current**	
    observation_time	"07:44 PM"
    temperature	17
    weather_code	116
    
    weather_descriptions	
    0	"Partly cloudy"
    wind_speed	9
    wind_degree	300
    wind_dir	"WNW"
    pressure	1018
    precip	0
    humidity	58
    cloudcover	25
    feelslike	17
    uv_index	4
    visibility	14
    is_day	"yes"

    
## IMPORTANT !! You must to create an account on apiweatherstack and mapbox in order to be able to have an acces key. I changed the code for URL in the src/utilsforecast and src/utilsgeocode.You need to delete that and paste your acces key/acces token
