// SECTION store components

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

// SECTION draw to page

function drawContainers(){
    let containersElem = document.getElementById("container-cards")
    let template = ""
    containers.forEach(c => {
        template += `
        <div class="card text-dark">
            <img src="${c.image} " class="size" alt="">
            <p>${c.name} </p>
            <p>$${c.price}</p>
            <button class="btn btn-outline-success" onclick="addItemToCart()"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    containersElem.innerHTML = template
}

function drawIceCream(){
    let iceCreamElem = document.getElementById("ice-cream-cards")
    let template = ""
    iceCream.forEach(i => {
        template += `
        <div class="card text-dark">
            <img src="${i.image} " class="size" alt="">
            <p>${i.name} </p>
            <p>$${i.price}</p>
            <button class="btn btn-outline-success" onclick="addItemToCart()"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    iceCreamElem.innerHTML = template
}

function drawToppings(){
let toppingsElem = document.getElementById("toppings-cards")
    let template = ""
    toppings.forEach(t => {
        template += `
        <div class="card text-dark">
            <img src="${t.image} " class="size" alt="">
            <p>${t.name} </p>
            <p>$${t.price}</p>
            <button class="btn btn-outline-success" onclick="addItemToCart()"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    toppingsElem.innerHTML = template
}

function drawCart(){

}

// SECTION functions for page

function addItemToCart(){
    console.log("Button Linked")
}


function calculateCartTotal(){

}

function checkout(){

}

function removeItem(){

}

drawContainers()
drawIceCream()
drawToppings()