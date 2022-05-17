const main = document.getElementById('main-market');
const selectProducts = document.getElementById('select-products');


window.addEventListener('load',loadselect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event){
    products.map(element =>{
        if (event.target.value === element.name){
            card = element.div
            nameProduct = element.name;
            imgProduct = element.img;
            priceProduct = element.price;
        }
    });
    createCard(nameProduct, imgProduct, priceProduct);
}

// console.log(event.target.value);

function loadselect(){
    const title = document.createElement('h1');
    title.textContent = "saludo"

    main.appendChild(title);
    const options = document.createElement();
}
function loadselect(){
    products.map(element=>{
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.value = element.name;
        selectProducts.appendChild(opt);
    });
}

function createCard(nameProduct, imgProduct, priceProduct) {
    const card = document.createElement('div');
    const imgCard = document.createElement('img');
    const title = document.createElement('h3');
    const price = document.createElement('p');
    const button = document.createElement('button');
    const button2 = document.createElement('button');

    imgCard.setAttribute('src', imgProduct);
    imgCard.setAttribute('alt', nameProduct);
    button.setAttribute('id','btn-add');
    
    title.textContent = nameProduct;
    price.textContent = priceProduct;
    button.textContent = "Agregar";
    button2.textContent = "x";

    card.appendChild(button2)
    card.appendChild(imgCard);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button)
    main.appendChild(card);
    
    card.classList.add("card");
    button2.classList.add("boton");
    button2.addEventListener(`click`, element => {main.removeChild (card)});
}
products.map((element=>{console.log(element.name)}));