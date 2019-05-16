var foo = function(name){
    var namee = name
    var helloWorld = document.createElement('div');
    helloWorld.innerHTML = 'Hello World !!!'
    var nameElem = document.createElement('div');
    nameElem.innerHTML = namee
    var button = document.createElement('button');
    button.innerHTML = 'click me';
    button.onclick = function(){
        namee = namee + " 1";
        console.log(namee)
        return false;
    };
    document.getElementById("app2").appendChild(helloWorld);
    document.getElementById("app2").appendChild(nameElem);
    document.getElementById("app2").appendChild(button);
};

foo('Saloni')

module.exports = foo