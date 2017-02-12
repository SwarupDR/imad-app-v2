console.log('Loaded!');
//changing text of the main text div
var element = document.getElementById('main-text');
element.innerHtml= 'New Value';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
 fuction moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight, 50);
  img.style.marginleft = '100px';  
};


