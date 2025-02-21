// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router()
const Celebrity = require('./../models/Celebrity.model')

// all your routes here
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
});

router.post("/create", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    if( name.length * occupation.length * catchPhrase === 0 ){
        res.render('celebrities/new-celebrity', {errorMessage: `All fields should be filled.`})
        return
    }

Celebrity
    .findOne({name})
    .then( (user) => {
        if( user){
            res.render('celebrities/new-celebrity', {errorMessage: `The celebrity ${name} already exists.`})
            return
        }

        console.log('user: ', user)

        Celebrity
            .create({ name, occupation, catchPhrase })
            .then( () => res.redirect('/celebrities/celebrities') )
            .catch( (err) => res.send(`There was an error creating the new celebrity ${err}`) )
    })
    .catch( (err) => res.send(`There was an error creating the new celebrity ${err}`) )
});

router.get("/celebrities", (req, res, next) => {
    Celebrity
        .find()
        .then( (celebrities) => res.render("celebrities/celebrities", {celebrities}))
        .catch( (err) => res.send(`There was an error creating the new celebrity ${err}`) )
});

module.exports = router;