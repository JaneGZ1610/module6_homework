
function sum(x) {
    return function(y) {
        return x + y;
    }
}

let f = sum(5);
console.log( f(0), f(5));
console.log( sum(2)(2), sum(4)(3))



