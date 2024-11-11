function openMenu(){
    let ul = document.querySelector('.ul');
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
        document.querySelector(".icon").src = "assets/img/menu.svg";
    } else {
        ul.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.svg"
    }
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}