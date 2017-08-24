console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img=document.getElementById('Img');
var maarginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 'px';
    img.style.marginLeft - marginLeft +'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};