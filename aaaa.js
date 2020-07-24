let product1Plus = document.getElementById('product1-plus');
let product1Minus = document.getElementById('product1-minus');
let product2Plus = document.getElementById('product2-plus');
let product2Minus = document.getElementById('product2-minus');
let remove1 = document.getElementById('remove1');
let remove2 = document.getElementById('remove2');
let product1Show = document.getElementById('product1-show');
let product2Show = document.getElementById('product2-show');
let product1Delete = document.getElementById('product1-delete');
let product2Delete = document.getElementById('product2-delete');
let undo1 = document.getElementById('undo1');
let undo2 = document.getElementById('undo2');
let deleteForever1 = document.getElementById('delete-forever1');
let deleteForever2 = document.getElementById('delete-forever2');
let checkOut = document.getElementById('check-out');
let payment = document.getElementById('payment');

let remember1, remember2;



function totalPriceCalculator(price, otherPrice) {
    totalPrice = price + otherPrice;
    let tax = totalPrice * 0.05;
    let totalWithTax = totalPrice + tax;
    if (Math.round(totalPrice) - totalPrice == 0) document.getElementById("total-price").innerHTML = totalPrice;
    else document.getElementById("total-price").innerHTML = totalPrice.toFixed(2);

    if (Math.round(tax) - tax == 0) document.getElementById("tax").innerHTML = tax;
    else document.getElementById("tax").innerHTML = tax.toFixed(2);

    if (Math.round(totalWithTax) - totalWithTax == 0) document.getElementById("total-with-tax").innerHTML = totalWithTax;
    else document.getElementById("total-with-tax").innerHTML = totalWithTax.toFixed(2);
}

function priceByInput(inputId, priceId, unitPrice) {
    let price = parseFloat(document.getElementById(priceId).innerHTML);
    let totalPrice = parseFloat(document.getElementById("total-price").innerHTML);
    let otherPrice = totalPrice - price;

    let inputAsString = document.getElementById(inputId).value;
    if(inputAsString == "") inputAsString = "0";
    console.log(isNaN(inputAsString));
    if (isNaN(inputAsString) == false) {
        input = parseFloat(inputAsString);
        console.log(input);
        price = unitPrice * input;
        document.getElementById(priceId).innerText = price;

        totalPriceCalculator(price, otherPrice);
    }

}

function numCount(inputId, sign) {
    productCount = parseInt(document.getElementById(inputId).value);
    if (!(productCount == 0 && sign == false)) {
        if (sign == true) productCount++;
        else productCount--;
        document.getElementById(inputId).value = productCount;
        // console.log(productCount);
    }
}

function priceCount(inputId, priceId, unitPrice) {
    let price = parseFloat(document.getElementById(priceId).innerHTML);
    let input = parseInt(document.getElementById(inputId).value);
    let totalPrice = parseFloat(document.getElementById("total-price").innerHTML);

    let otherPrice = totalPrice - price;
    // console.log("price", price);
    // console.log("input", input);
    if (!(input < 0)) {
        price = unitPrice * input;
        // console.log("Price ", price);
        if (Math.round(price) - price == 0) document.getElementById(priceId).innerHTML = price;
        else document.getElementById(priceId).innerHTML = price.toFixed(2);

        totalPriceCalculator(price, otherPrice);
    }
}

// Add listener in plusIcon for 1st product
product1Plus.addEventListener('click', function () {
    numCount("product1-count", true);
    priceCount("product1-count", "price1", 1219);
})

// Add listener in minusIcon for 1st product
product1Minus.addEventListener('click', function () {
    numCount("product1-count", false);
    priceCount("product1-count", "price1", 1219);
})

// Add listener in plusIcon for 2nd product
product2Plus.addEventListener('click', function () {
    numCount("product2-count", true);
    priceCount("product2-count", "price2", 59);
})

// Add listener in minusIcon for 2nd product
product2Minus.addEventListener('click', function () {
    numCount("product2-count", false);
    priceCount("product2-count", "price2", 59);
})

// Remove1 listener
remove1.addEventListener('click', function(){
    product1Show.style.display = 'none';
    product1Delete.style.display = 'block';
    remember1 = parseInt(document.getElementById('product1-count').value);
    document.getElementById('product1-count').value = 0;
    priceByInput('product1-count', 'price1', 1219);
})

// Remove2 listener
remove2.addEventListener('click', function(){
    product2Show.style.display = 'none';
    product2Delete.style.display = 'block';
    remember2 = parseInt(document.getElementById('product2-count').value);
    document.getElementById('product2-count').value = 0;
    priceByInput('product2-count', 'price2', 59);
})

// Undo1 listener
undo1.addEventListener('click', function(){
    product1Show.style.display = 'block';
    product1Delete.style.display = 'none';
    document.getElementById('product1-count').value = remember1;
    priceByInput('product1-count', 'price1', 1219);
})

// Undo2 listener
undo2.addEventListener('click', function(){
    product2Show.style.display = 'block';
    product2Delete.style.display = 'none';
    document.getElementById('product2-count').value = remember2;
    priceByInput('product2-count', 'price2', 59);
})

// Delete forever1 listener
deleteForever1.addEventListener('click', function(){
    product1Delete.style.display = 'none';
})

// Delete forever2 listener
deleteForever2.addEventListener('click', function(){
    product2Delete.style.display = 'none';
})

// Check Out listener
checkOut.addEventListener('click', function(){
    product1Show.style.display = 'none';
    product2Show.style.display = 'none';
    product1Delete.style.display = 'none';
    product2Delete.style.display = 'none';
    checkOut.style.display = 'none';
    payment.style.display = 'block';
})