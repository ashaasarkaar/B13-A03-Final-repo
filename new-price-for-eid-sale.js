/**
 * Problem-01: New Price for Eid Sale 
 */

function newPrice(currentPrice, discount){
    if(typeof currentPrice !== "number" || typeof discount !== "number"){
         return "Invalid";
    }
    if(discount < 0 || discount > 100){
        return "Invalid";
    }
    const discountPrice = (currentPrice * discount) / 100;
    const mainPrice = currentPrice - discountPrice;
    const mainPricewithFraction = mainPrice.toFixed(3);
    return mainPricewithFraction;
}

const price = newPrice(1500, 20);
console.log(price);