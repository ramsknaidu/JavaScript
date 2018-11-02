var app = {};
app.show = function(){
    console.log('Hello world');
}

app.updateContent = function(el,msg){
    return function(){
    var majorHeading = document.getElementById(el);
    majorHeading.innerHTML = msg;
}
}

app.init = function() {
    var headBtn = document.getElementById('showHeading');
    var subheadBtn = document.getElementById('showSubHeading');
   
console.log(app.updateContent('javascript'));
    headBtn.addEventListener('click',app.updateContent('mjHeading','Javascript'));
    subheadBtn.addEventListener('click',app.updateContent('mnHeading','VDSI-Java Script'));
}

