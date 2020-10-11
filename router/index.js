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
        return cocktail.name === id
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

    
    const listOfTypes = cocktails.filter(cocktail => cocktail.type === typeName);
    // const typesList = new Set();  
    // cocktails.forEach(cocktail => { 
    // typesList.add(cocktail.type) 
    // }); 
    
    // console.log(listOfTypes)
    if (!listOfTypes) {
        response.status(404).render('404');
        return;
    }

    response.render('type', {
        listOfTypes,
        // typesList
    });
});

router.get('/type/cocktail/:id', (request, response) => {
    const id = request.params.id;

    const selectedCocktail = cocktails.find(cocktail => {
        return cocktail.name === id
    });
    
    if (!selectedCocktail) {
        response.status(404).render('404');
        return;
    }

    response.render('cocktail', {
        cocktail: selectedCocktail,
    });
});

module.exports = router;