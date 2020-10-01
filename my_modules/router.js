const express = require('express');

const router = express.Router();

const cocktails = require('../public/js/cocktails');

// router.get('/', (_, response) => {
// response.send('Hello COCKTAILS');
// });

router.get('/', (_, response) => {

    response.render('index', {
        cocktails,

    })
});

router.get('/cocktail/:id', (request, response) => {
    const id = request.params.id;

    const selectedCocktail = cocktails.find(cocktail => {
        return id === cocktail.name
    });
    
    if (!selectedCocktail) {
        response.status(404).render('404');
        return;
    }

    response.render('cocktail', {
        cocktail: selectedCocktail,
    });
});

router.get('/type/:typeName', (request, response) => {
    const typeName = request.params.typeName;

    const selectedType = cocktails.filter(type => {
        return typeName === type.name
    });
    
    console.log(selectedType)
    if (!selectedType) {
        response.status(404).render('404');
        return;
    }

    response.render('typeName', {
        type: selectedType,
    });
});

module.exports = router;