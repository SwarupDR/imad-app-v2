console.log('Loaded!');
//changing text of the main text div
var element = document.getElementById('main-text'
);
element.innerHTML= 'New Value';
//move the image
var img = document.getElementById('madi');
img.onClick = function() {
    var interval = setInterval(moveRight, 50);
  img.style.marginLeft = '100px';  
};


