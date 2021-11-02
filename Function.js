function whileLoop() {
    var number = 0;

    while (number < 20) {
        if (number == 133)
            console.log(number);
        else {
            console.log("number not found")
            break;
        }

        number++;
    }
}


function switchCase(){
    var number = 33;

switch(number){
    case 11:
        console.log("hi am 11");
        break;

        case 22:
        console.log("hi am 22");
        break;

        case 33:
        console.log("hi am 33");
        break;

        case 44:
        console.log("hi am 44");
        break;
    default:
        console.log("i dont know who  you are");

}
}

whileLoop();
console.log("this is function print for and while loop element");
switchCase();


console.log("Using function to calculate number ");


function add(num1 ,num2){
    var result = num1+num2;
    return result;
}

function sub(num1 ,num2){
    var result = num1-num2;
    return result;
}

function mul(num1 ,num2){
    var result = num1*num2;
    return result;
}

function div(num1 ,num2){
    var result = num1/num2;
    return result;
}


var addition = add(12 ,12);
console.log("The Addition : ",addition);
var substraction = sub(14 ,12);
console.log("The substraction : ",substraction);
var multiplication = mul(2 ,12);
console.log("The multiplication : ",multiplication);
var divition = div(60 ,12);
console.log("The divition : ",divition);

var totaladdition = addition+substraction+multiplication+divition ;
console.log("The number : ",totaladdition);