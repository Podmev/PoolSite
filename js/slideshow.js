var slideIndex = 0;
carousel();

function carousel() {
  console.log("carusel")
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(x.length)
  //if x.length==0 can be exception
  if(x.length > 0){
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
  }
  setTimeout(carousel, 2000); // Change image every 2 seconds
}