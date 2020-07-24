



let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mycutecat.jpg') {
      myImage.setAttribute ('src','images/cat.jpg');
    } else {
      myImage.setAttribute ('src','images/mycutecat.jpg');
    }
}
/*document.querySelector('img').onclick = function() {
   alert('MEOW');
}*/