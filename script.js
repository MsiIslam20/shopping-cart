// //Item Increase for Each Click
// function eachItemIncrease(id, input, finalPrice, getPrice){
//     const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
//     const itemIncrease = document.getElementById(id);
//     itemIncrease.addEventListener("click" , function(){
//         let inputNumber = document.getElementById(input).value;
//         inputNumber++
//         document.getElementById(input).value = inputNumber; 
    
//         const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
//         const doubleNumber = priceNumber + getPricePhone;
//         document.getElementById(finalPrice).innerText = doubleNumber; 
        
          
//     })
// }

// eachItemIncrease("itemIncrease", "inputNumber" , "pricePhone", "pricePhone" )
// eachItemIncrease("caseIncrease" , "caseNumber" , "priceCase", "priceCase")

// //Item Decrease for Each Click
// function eachItemDecrease(id, input , finalPrice , getPrice){
//     const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
//     const itemDecrease = document.getElementById(id)
//     itemDecrease.addEventListener("click" , function(){
//         let inputNumber = document.getElementById(input).value;
//         inputNumber--
//         document.getElementById(input).value = inputNumber ;
    
    
//         const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
//         const doubleNumber = priceNumber - getPricePhone;
//         document.getElementById(finalPrice).innerText = doubleNumber; 
         
//     })
    
// }

// eachItemDecrease("itemDecrease", "inputNumber" , "pricePhone", "pricePhone" )
// eachItemDecrease("caseDecrease" , "caseNumber" , "priceCase", "priceCase")


// var finalOutput = parseFloat(document.getElementById("finalOutput").innerText);
// document.getElementById("finalOutput").innerText = 0;







//Item Increase for Each Click
function eachItemIncrease(id, input, finalPrice, getPrice){
    const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
    const itemIncrease = document.getElementById(id);
    itemIncrease.addEventListener("click" , function(){
        let inputNumber = document.getElementById(input).value;
        inputNumber++
        document.getElementById(input).value = inputNumber; 
    
        const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
        const doubleNumber = priceNumber + getPricePhone;
        document.getElementById(finalPrice).innerText = doubleNumber; 
        
          
    })
}

eachItemIncrease("itemIncrease", "inputNumber" , "pricePhone", "pricePhone" )
eachItemIncrease("caseIncrease" , "caseNumber" , "priceCase", "priceCase")




const itemIncrease = document.getElementById("itemIncrease");
itemIncrease.addEventListener("click" , function sum(){
    let inputNumber = document.getElementById("inputNumber").value;
    inputNumber++
    document.getElementById("inputNumber").value = inputNumber; 
    return inputNumber;
})


const getPricePhone = parseFloat(document.getElementById("pricePhone").innerText);

const doubleNumber = getPricePhone + getPricePhone;

const getPricePhoneCase = parseFloat(document.getElementById("priceCase").innerText);
const tax = parseFloat(document.getElementById("tax").innerText)
const sumOfItem = document.getElementById("finalOutput").innerText = getPricePhone + getPricePhoneCase;

document.getElementById("totalSum").innerText = tax + sumOfItem;