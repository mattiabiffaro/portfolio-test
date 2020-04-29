let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tundra-c.jpg') {
      myImage.setAttribute ('src','images/cityscape.jpg');
    } else {
      myImage.setAttribute ('src','images/tundra-c.jpg');
    }
}