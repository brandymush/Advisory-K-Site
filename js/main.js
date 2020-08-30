$('.carousel').carousel();

var owl= $('.owl-carousel');

var carouselOption={
   items:3,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
    navigation:true,
    nav:true,
    autoplayHoverPause:true,
     navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
      
            
        },
        768:{
          
        },
        1440:{
           
        },
        576:{
            items:1,
            nav:true,
           
        }
       
    }

}
owl.owlCarousel(carouselOption);
