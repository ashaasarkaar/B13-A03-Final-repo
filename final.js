//Problem-01: New Price for Eid Sale
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



//Problem-02: OTP Validation for Zapshift
function validOtp(otp){
    if(typeof otp !== "string"){
        return "Invalid";
    }
    const otpLength = otp.length;
    const otpCheck = otp.startsWith("ph-", 0);
    if(otpLength === 8 && otpCheck){
        return true;
    }
    else{
        return false;
    }
}


//Problem-03: BCS Final Score Calculator
function  finalScore(omr) {
    if(typeof omr !== "object"){
        return "Invalid";
    }
    if(omr.right + omr.wrong + omr.skip === 100)
    {
        const wrongMark = omr.wrong * 0.5;
        const rightMark = omr.right; 
        const totalMark = Math.round(rightMark - wrongMark);
        return totalMark;
    }
    else{
        return "Invalid";
    }
}


//Problem-04: Upcoming Gono Vote

function gonoVote(array) { 
    if(Array.isArray(array) === false){
        return "Invalid";
    }
    let countHa = 0;
    let countNa = 0;
    for(const item of array){
        if(item === "ha"){
            countHa++;
        }
        if(item === "na"){
            countNa++;
        }
    }
    if(countHa > countNa){
        return true;
    }
    else if(countHa === countNa){
        return "equal";
    }
    else{
        return false;
    }
} 


//Problem-05: Text Analyzer for an AI Company

function analyzeText(str) { 
    if(typeof str !== "string" || str === ""){
        return "Invalid";
    }
    const stringSplit = str.split(' ');
    let bigWord = stringSplit[0];
    for(const word of stringSplit){
        if(word.length > bigWord.length){
            bigWord = word;
        }
    }
    const stringJoin = stringSplit.join("");
    const lengthStringJoin = stringJoin.length;
    Object = {longwords: bigWord, token: lengthStringJoin};
    return Object;
}


