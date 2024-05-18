const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')



//Setup handlebard engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('/about', (req,res) => {
    res.render('about', {
        title: 'This is the about page',
        name: 'Dani vrb'
    })
})



app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({ error: 'Please provide an address' })
    }
    

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error})
        }
   
        forecast(latitude, longitude, (error,forecastData)=> {
            if (error){
               return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})



app.get('/help', (req,res) => {
    res.render('help', {
        helpText: 'This is some helpful stuff',
        title: 'Help',
        name: 'Dani vrb'
    })
})


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dani vrb'
    })
})



app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help atricle not found',
        name: 'Danivrb'
        
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Danivrb'
    })
})


app.listen(3000, () => {
    console.log('the sv started on port 3000')
})