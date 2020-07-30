

var img = document.getElementById('img');
var images = ['front1.jpg', 'icon.jpg', 'front3.jpg','images.jpg', 'images(1).jpg'];
var x = 0;
function slide() {
    if (x < images.length) {
        x++;
    }
    else
        x = 1;
    img.innerHTML = "<img src=" + images[x - 1] + ">";

}
setInterval(slide, 2000);

//let play = function () {
    button=document.getElementsByClassName('playsong');
    for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click",myFunction); 
    }
      function myFunction() {
          console.log('sssssssss');
        var song = this.getAttribute('value');
        var song_name=this.getAttribute('value1');
        console.log(song_name);
        document.getElementById("songplay").setAttribute('src', song);
        document.getElementById("detail").innerHTML=song_name;
        document.getElementById("songplay").autoplay=true;
    }


//play();*/