function calculateurs(num1,num2, operateur){
    return operateur(num1,num2)
};

function diviseur(num1,num2){
    return num1/num2
};
function addition(num1,num2){
    return num1 + num2
};

function soustraire(num1,num2){
    return num1 - num2
};

function multiplicateur(num1,num2){
    return num1 * num2
};

console.log(calculateurs(4,3,multiplicateur));