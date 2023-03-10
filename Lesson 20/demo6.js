// [1,2,3,4]  rest operator
// in an arrow function we don't have arguments but we can use ...rest to achieve the same behaviour 
function sum(a,b,...params) {

    return params.reduce((acc, current) => acc+current,0);

}

console.log(sum(1,2,3,4,5));
console.log(sum(1,2));
