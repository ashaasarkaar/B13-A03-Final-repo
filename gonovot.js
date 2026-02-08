// Problem-04: Upcoming Gono Vote 

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

const result = gonoVote(["ha", "na", "ha", "na"]);
console.log(result);