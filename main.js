var mylmage = document.querySelector('img')

mylmage.onclick = function() {
    var mySrc = mylmage.getAttribute('src')
if(mySrc === '2.jpg') {
    mylmage.setAttribute ('src','геншин.jpg')
} else{
    mylmage.setAttribute ('src','2.jpg')
}
}