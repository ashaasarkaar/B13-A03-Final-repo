// Problem-03: BCS Final Score Calculator

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

const result = finalScore({right: 67, wrong: 23, skip: 10})
console.log(result)