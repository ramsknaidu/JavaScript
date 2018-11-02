(function (){
function add(){
    var counter = 0;
    return function(){
        return ++counter;
    }
}
var myCounter = add();
console.log(add());
console.log(add());
console.log(add());
})();