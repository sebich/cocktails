const cocktails = [
    {
        "id": "5c08b816-bbf3-4bda-a28d-1ce9c0ff8ad4",
        "name": "mojito",
        "type": "longdrink",
        "ingredients": [
            "menthe",
            "citron vert",
            "sucre",
            "rhum",
            "eau gazeuse",
            "angostura"
        ],
        "tags": [
            "classique",
            "frais"
        ],
        "img": "https://www.papillesetpupilles.fr/wp-content/uploads/2006/07/Mojito-%C2%A9sanneberg-shutterstock.jpg",
    },
    {
        "id": "b42e411b-f325-4283-b95f-17362dd04d64",
        "name": "Gin Fizz",
        "type": "longdrink",
        "ingredients": [
            "citron vert",
            "sucre",
            "Gin",
            "eau gazeuse"
        ],
        "tags": [
            "classique",
            "frais"
        ],
        "img": "https://images.absolutdrinks.com/drink-images/Raw/Absolut/3acf14b0-f4c9-4e85-a66b-8c98e97207ea.jpg?imwidth=500"
    },
    {
        "id": "e82f88ac-928b-44f3-b58e-c504b420ef98",
        "name": "Old fashioned",
        "type": "shortdrink",
        "ingredients": [
            "bourbon",
            "sucre",
            "angostura",
            "zeste d'orange"
        ],
        "tags": [
            "classique",
            "fort"
        ],
        "img": "data:image/jpeg;base64,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",
    },
    {
        "id": "b1682416-6010-4cfa-8dad-dc0aa3a4aa86",
        "name": "Sweety",
        "type": "shooter",
        "ingredients": [
            "soho",
            "champagne"
        ],
        "tags": [
            "doux",
            "chic"
        ],
        "img": "https://i.pinimg.com/474x/cb/38/ec/cb38ec1e8ce2b46d3fb031e5676fecd1--cocktail-soho-litchi.jpg",
    },
    {
        "id": "b2791108-b9b5-48e4-95e6-9c8ce9e63e92",
        "name": "Bougie d'anniversaire",
        "type": "shooter",
        "ingredients": [
            "Sirop de fraise",
            "Curaçao",
            "Cointrau"
        ],
        "tags": [
            "flambé",
            "sucré"
        ],
        "img": "https://sunsummerbreak.files.wordpress.com/2010/05/398393975_e440a86046.jpg",
    },
    {
        "id": "c0a8e818-3761-4bc0-86e4-9f9e2db3c87d",
        "name": "Schtroumpf",
        "type": "shooter",
        "ingredients": [
            "Sirop de pèche",
            "Vodka",
            "Curaçao"
        ],
        "tags": [
            "sucré"
        ], "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStj11jcHy7UhACet8UENBiwDjg8empjytaFA&usqp=CAU",
    },
    {
        "id": "94409f8f-f094-4dd1-a6d9-d5de2164afb8",
        "name": "Madelaine",
        "type": "shooter",
        "ingredients": [
            "Cointreau",
            "Amaretto",
            "Liqueur de café (optionel)",
            "Jus d'ananas"
        ],
        "tags": [
            "sucré"
        ],
        "img": "https://static1.villaschweppes.com/articles/6/51/46/6/@/364165-la-recette-du-cocktail-madeleine-opengraph_1200-2.jpeg",
    },
    {
        "id": "92491c26-0bf4-4522-8041-dbc757cb2cf1",
        "name": "Loft",
        "type": "shooter",
        "ingredients": [
            "Baileys",
            "Malibu",
            "Sirop de caramel"
        ],
        "tags": [
            "sucré"
        ],
        "img": "https://i.pinimg.com/474x/9c/07/3b/9c073bfb87b6f67a7984697b69607aa1.jpg"
    },
];

module.exports = cocktails;