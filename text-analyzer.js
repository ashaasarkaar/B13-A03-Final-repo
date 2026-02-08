// Problem-05: Text Analyzer for an AI Company 

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
    bigWordObject = {longwords: bigWord, token: lengthStringJoin}
    return bigWordObject;
}

const output = analyzeText("I am a little honest person");
console.log(output);