console.log('attached');

//var array []



//mockData soit de la fausse donnée
var products = [
    {
        name: 'sac',
        price: 39,
        img: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M53245_PM2_Front%20view.jpg?wid=341&hei=341',
        like: true,

    },
    {
        name: 'shirt',
        price: 15,
        img: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton-t-shirt-en-jersey-%C3%A0-imprim%C3%A9-malle-pr%C3%AAt-%C3%A0-porter--FFTS79IRB004_PM2_Front%20view.jpg?wid=614&hei=614',
        like: false,

    },
    {
        name: 'chaussures',
        price: 59,
        img: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--AF9U1ASCRC_PM2_Front%20view.jpg?wid=341&hei=341',
        like: false

    }
];

var container = document.getElementById('container');

/* autre écriture que forEach soit avec la boucle for
for (i=0; i<products.length; i++) {
  var elementProduct = document.createElement('div');
elementProduct.setAttribute('id', product.name);

//console.log(elementProduct);
document.body.appendChild(elementProduct);
};*/

products.forEach(function (product) {
    /* On se réfère à ce qu'on a écrit au-dessus
    {
    name: 'sac', -> product.name 
        price: 39, -> prodduct.price
        img: 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M53245_PM2_Front%20view.jpg?wid=341&hei=341',  -> product.img
        like: true -> product.like
    }
    */

    var elementProduct = document.createElement('div');
    elementProduct.setAttribute('id', product.name); //Mets à cet élément l'attribut  id avec la valeur product.name
    /*Pour associer l'enfant au parent body 
    document.body.appendChild(elementProduct);*/
    container.appendChild(elementProduct);

    elementProduct.innerHTML = product.name + " " + product.price + "€" + '<img src="' + product.img + '" >' + product.like;

    var buttonBuy = document.createElement('button');
    container.appendChild(buttonBuy);
    buttonBuy.innerHTML = 'BUY';
    /*var imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);
    elementProduct.appendChild(imgProduct);*/

    /*var  = document.createElement('input');
    nameProduct.setAttribute('text', product.name);
    elementProduct.appendChild(nameProduct);*/
    //document.onclick = function ('img') {
    //    console.log('j\'ai bien cliqué');

    // }
});
/*class Product {
    constructor(price, name, url, like) {
        this.price = price
    }
}
var products = [
    new Product(39, 'sac', 'https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M53245_PM2_Front%20view.jpg?wid=341&hei=341', true)
]*/

console.log($);
//EXEMPLE FAIT PAR L'API SWAPI Star Wars ------------------------
$.get("https://swapi.co/api/people/", function (response) {
    response.results.forEach(function (personnage) {
        console.log(personnage.name);
        const elemnt = document.create.element("div");
        element.innerHTML = personnage.name;
        document.body.appendChild(element);
    });
});
// L'exemple se finit ici----------------------------------------

$.get('http://localhost:3000/', function (response, error) {
    console.log(response);
});