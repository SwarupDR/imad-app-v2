console.log('Loaded!');
//changing text of the main text div
var element = document.getElementById('main-text'
);
element.innerHTML= 'New Value';
//move the image
var img = document.getElementById('madi');
 var marginLeft = 0;
function moveRight() {
marginLeft = marginLeft + 1;
 img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function() {
var interval = setInterval(moveRight, 50);
};

 
    
   




