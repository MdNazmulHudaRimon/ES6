// function doubleIt(num){
//     return num*2;
// }
const doubleIt  = num => num *2;
const add = (x,y) => x+y;
const multiLine = (a,b) =>{
    const sum = a + b;
    const multiplication = a * b;
    const grandTotal = sum * multiplication;
    return grandTotal;
}
const result = doubleIt(50);
console.log(result);
const sum = add(5,1);
console.log(sum);
const finalResult = multiLine(5,6);
console.log(finalResult);