//counter code
var button = document.getElementById('counter');
button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
               //submit names

var submit =  document.getElementById('submit');
submit.onclick = function(){
   
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
    };
     var nameInput = document.getElementById('name');
var name = nameInput.value;
    //make a request
    request.open('GET','http://rockstarkatrick.imad.hasura-app.io/submit-name?name'+ name ,true);
    request.send(null);
    
};
};