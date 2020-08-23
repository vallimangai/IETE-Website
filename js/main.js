const responsive={
    0:{
        items:0
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:2
    },
    1130:{
        items:3
    }
}

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}



$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    /*click event on toogle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    });
    //owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:responsive
    });
});