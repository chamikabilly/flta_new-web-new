//intializing swiper 


window.onload = function swiperInitializing() {

  const swiper = new Swiper(".swiper-container.header-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed:1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const secondSwiper = new Swiper('.swiper-container.player-details-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed:1000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
}


// sticky header js

//when the user scroll the page ,execute function
window.onscroll =function() {stikyHeader()};

//Get the header 
var header = document.getElementById("nav");


// Add the sticky class to the navbar when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position

function stikyHeader(){
  if(window.pageYOffset > 0){
    header.classList.add("sticky")
  
  }else{
    header.classList.remove("sticky");  
  }
}







  



  
