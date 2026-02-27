document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.product-slider')) {
    new Splide('.product-slider', {
      type         : 'loop',
      perPage      : 5,
      perMove      : 1,
      gap          : '0rem',
      focus        : 'center',
      autoplay     : false,
      updateOnMove : false,
      pagination   : false,
      arrows       : false,
      breakpoints  : {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }

  

  new Splide('#splideone', {
    direction: 'ttb',
    height   : '27.604vw',
    wheel    : true,
    type   : 'loop',
    drag   : 'false',
    focus  : 'center',
    arrows: false,
    pagination: false,
    wheel    : false,
    perPage: 1.5,
    autoScroll: {
    speed: 1,
    },
     breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1, direction: 'ltr', },
      '767': {
            perPage: 1,
            direction: 'ltr',
            // coverflowEffect: {
            //     rotate: 0,
            //     stretch: 75,
            //     depth: 320,
            //     modifier: 1,
            //     slideShadows: false
            // },
        },
    }
  }).mount( window.splide.Extensions );
  

    new Splide('#splidetwo', {
    direction: 'ttb',
    height   : '27.604vw',
    wheel    : true,
    type   : 'loop',
    drag   : 'false',
    focus  : 'center',
    arrows: false,
    pagination: false,
    wheel    : false,
    perPage: 1.5,
    autoScroll: {
    speed: -1,
    },
     breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1 },
    }
  }).mount( window.splide.Extensions );
  
  // new Splide('.important_noti_slider', {
  //   type: 'loop',
  //   autoWidth: true,      
  //   arrows: false,
  //   pagination: false,
  //   drag: false,
  //   autoScroll: {
  //     speed: 1,
  //     pauseOnHover: true,
  //     pauseOnFocus: true,
  //   },
  // }).mount(window.splide.Extensions);


});
