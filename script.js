var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    slidesPerGroup:2,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1, 
        },
        520:{
            slidesPerView: 2,
        }
    }
  });

  // function toggleDetails(id){
  //   var details = document.getElementById(id);
  //   details.classList.toggle("show");
  // }
  function displayText(id) {
    var text = document.getElementById(id);
    text.style.display = "block";
  }
  
  const dialog = document.getElementById("myDialog");
  function showDialog() { 
    dialog.show(); 
  } 
  function closeDialog() { 
    dialog.close(); 
  } 

