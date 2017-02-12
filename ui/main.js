console.log('Loaded!');
//changing text of the main text div
var element = document.getElementById('main-text');
element.innerHtml= 'New Value';
//move the image
var img = document.getElementById('madi');
fuction moveRight() {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight, 100);
  img.style.marginleft = '100px';  
};


