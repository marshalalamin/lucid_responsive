 $(document).ready(function () {
      $(".pricing_carousel").owlCarousel({

        items: 2,
        loop: true,
        autoplay: true,

        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots: true,

        responsive: {

          0: {
            items: 1,

          },

          768: {
            items: 2,

          },

          768: {

          }
        }



      }
        
       
        
      );
 });
    


 