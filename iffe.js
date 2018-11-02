(function(){
    console.log();
    function first(){
        console.log('i am ins first');
    }
    function second(){
        console.log('i am in second');
    }
    

    return{
        one: first
    }

})('i am inside iffe');

