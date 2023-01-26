// SECTION store components

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    sku: 'c00d00'
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    sku: 'v4n1'
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    sku:'s7r4w'
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    sku: 'spr1'
}, {
    name: 'Choco Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    sku: 'c0c0'
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    sku: 'w4f1c0n3'
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    sku: 'w4f1b0w1'
}]

let cart = []

// SECTION draw to page

function drawStore(){
    let containersElem = document.getElementById("container-cards")
    let template = ""
    containers.forEach(c => {
        template += `
        <div class="card text-dark">
            <img src="${c.image} " class="size" alt="">
            <p>${c.name} </p>
            <p>$${c.price}</p>
            <button class="btn btn-outline-primary" onclick="addContainerToCart('${c.sku}')"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    containersElem.innerHTML = template

    let iceCreamElem = document.getElementById("ice-cream-cards")
    let template2 = ""
    iceCream.forEach(i => {
        template2 += `
        <div class="card text-dark">
            <img src="${i.image} " class="size" alt="">
            <p>${i.name} </p>
            <p>$${i.price}</p>
            <button class="btn btn-outline-primary" onclick="addIceCreamToCart('${i.sku}')"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    iceCreamElem.innerHTML = template2

    let toppingsElem = document.getElementById("toppings-cards")
    let template3 = ""
    toppings.forEach(t => {
        template3 += `
        <div class="card text-dark">
            <img src="${t.image} " class="size" alt="">
            <p>${t.name} </p>
            <p>$${t.price}</p>
            <button class="btn btn-outline-primary" onclick="addToppingsToCart('${t.sku}')"><i class="mdi mdi-cart"> <small>ADD</small></i></button>
        </div>
        `
    })
    toppingsElem.innerHTML = template3

}

function drawCart(){
    let cartElem = document.getElementById("cart")
    let cartTotalElem = document.getElementById("cart-total")
    let template = ""
    cart.forEach(i => {
        template += `
        <card class="card text-dark">
            <p>${i.name}</p>
            <p>$${i.price}</p>
            <p>x${i.quantity}</p>
            <button class="btn btn-danger" onclick="removeItem('${i.sku}')">Remove</button>
        </card>
        `
    })
    let total = calculateCartTotal()

    cartElem.innerHTML = template
    cartTotalElem.innerText = total
}

// SECTION functions for page

function addContainerToCart(sku){
    // console.log("Button Linked")
    console.log(sku);
    let itemToAdd = containers.find(c => c.sku == sku);

    let itemFoundInCart = cart.find(i => i.sku == sku);

    if(itemFoundInCart){
        itemFoundInCart.quantity++
    } else {
        cart.push({
            name: itemToAdd.name,
            img: itemToAdd.image,
            price: itemToAdd.price,
            sku: itemToAdd.sku,
            quantity: 1
        })
    }

    drawCart()
}

function addIceCreamToCart(sku){
    // console.log("Button Linked")
    console.log(sku);
    let itemToAdd = iceCream.find(c => c.sku == sku);

    let itemFoundInCart = cart.find(i => i.sku == sku);

    if(itemFoundInCart){
        itemFoundInCart.quantity++
    } else {
        cart.push({
            name: itemToAdd.name,
            img: itemToAdd.image,
            price: itemToAdd.price,
            sku: itemToAdd.sku,
            quantity: 1
        })
    }

    drawCart()
}

function addToppingsToCart(sku){
    // console.log("Button Linked")
    console.log(sku);
    let itemToAdd = toppings.find(c => c.sku == sku);

    let itemFoundInCart = cart.find(i => i.sku == sku);

    if(itemFoundInCart){
        itemFoundInCart.quantity++
    } else {
        cart.push({
            name: itemToAdd.name,
            img: itemToAdd.image,
            price: itemToAdd.price,
            sku: itemToAdd.sku,
            quantity: 1
        })
    }

    drawCart()
}


function calculateCartTotal(){
    let total = 0
    cart.forEach(p => {
        total += p.price * p.quantity
    })
    return total

}

function checkout(){
    cart = []
    drawCart()
}

function removeItem(sku){
    // console.log("hello");
    let itemToRemove = cart.find(i => i.sku == sku)
    itemToRemove.quantity--
    if(itemToRemove.quantity < 1){
        let index = cart.findIndex(i => i.sku == sku)
        cart.splice(index, 1)
    }
    drawCart()
}

drawStore()