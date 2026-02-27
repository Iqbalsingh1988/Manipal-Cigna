  document.addEventListener('DOMContentLoaded', function () {
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

  new Splide('.key_benefit_slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: true,
    gap: '2rem',
    focus: 'center',
    breakpoints: {
      '991': {
          perPage: 2,
           gap: '1rem',
      },

      '767': {
           perPage: 1,
           gap: '3rem',
      },

    }
  }).mount();



  new Splide('.health_insurance_slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: true,
    gap: '1rem'
  }).mount();

  new Splide('.featured_insurance_slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: true,
    gap: '2rem',
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
        perMove: 1,
        focus: 'center',
        gap: '1rem',
      },

     
        
    }
  }).mount();

    new Splide('.featured_insurance_sliders', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: true,
    gap: '2rem',
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
        perMove: 1,
        focus: 'center',
        gap: '1rem',
      },

     
        
    }
  }).mount();




  new Splide('.testimonial_mobile_slider', {
    type: "loop",
  perPage: 1,
  arrows: true,
  pagination: true,
  focus: "center",
  gap: "1em",
   arrows: false,
    pagination: false ,
    breakpoints: {
      1024: { perPage: 1 },
      640: { perPage: 1 },
      gap: '1rem',
    }
  }).mount(window.splide.Extensions);


    new Splide('.product-slider', {
      type     : 'loop',
      perPage  : 5,
      gap      : '0rem',
      focus: 'center',
      autoplay : false,
      updateOnMove: false,
      pagination: false,
      arrows: false,
      breakpoints: {
        768: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
      },
    }).mount();

    
    


});





document.querySelectorAll('.video_cover').forEach(cover => {
    const playBtn = cover.querySelector('.play_circle_btn');
    const videoFrame = cover.querySelector('.video_frame');
    const iframe = cover.querySelector('iframe');

    playBtn.addEventListener('click', () => {
        videoFrame.style.display = 'block';
        cover.querySelector('.play_video_btn').style.display = 'none';

        // Autoplay video using YouTube API
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
});



// document.querySelectorAll('.video_cover').forEach(cover => {
//   const playBtn = cover.querySelector('.play_circle_btn');
//   const videoFrame = cover.querySelector('.video_frame');
//   const iframe = cover.querySelector('iframe');

//   playBtn.addEventListener('click', () => {
//     const slide = cover.closest('.swiper-slide');
//     if (slide.classList.contains('swiper-slide-active')) {
//       videoFrame.style.display = 'block';
//       cover.querySelector('.play_video_btn').style.display = 'none';

//       // Play video using YouTube iframe API
//       iframe.contentWindow.postMessage(
//         '{"event":"command","func":"playVideo","args":""}',
//         '*'
//       );
//     }
//   });
// });
   



if ($('.solution__slider').length) {
    var solutionSlider = new Swiper('.solution__slider', {
        effect: "coverflow",
        centeredSlides: true,
        loop: true,
        slidesPerView: "1.5",
        coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 150,
            modifier: 2.5,
            slideShadows: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: ".next-btn-solution",
            prevEl: ".prev-btn-solution"
        },
       
    });
}


$(".solution_play_btn").click(function () {
    $(".popup_main").fadeIn(500);
});

$(".close").click(function () {
    $(".popup_main").fadeOut(500);
});



$(".search_popup_btn").click(function(e){
    e.preventDefault();
    $(".search_popup_main").fadeIn(500);
});

$(".close").click(function(){
    $(".search_popup_main").fadeOut(500);
});



  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.customer_testimonial_video_slider').forEach(slider => {
      const splide = new Splide(slider, {
        perPage: 1,
        perMove: 1,
        arrows: false,
        pagination: true,
        gap: '4.875rem',
        focus: 'center',
        breakpoints: {
          1024: { perPage: 1 },
          640: { perPage: 1 },
        }
      });

      // Reset videos on slide change
      splide.on('moved', () => {
        slider.querySelectorAll('.video_cover').forEach(cover => {
          const videoFrame = cover.querySelector('.video_frame');
          const playBtn = cover.querySelector('.play_video_btn');
          const iframe = cover.querySelector('iframe');

          // Hide video iframe and show thumbnail
          videoFrame.style.display = 'none';
          if (playBtn) playBtn.style.display = 'block';

          // Reset iframe to stop video
          const src = iframe.src;
          iframe.src = '';
          iframe.src = src;
        });
      });

      splide.mount();
    });
  new Splide('.important_noti_slider', {
    type: 'loop',
    autoWidth: true,      
    arrows: false,
    pagination: false,
    drag: false,
    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
  }).mount(window.splide.Extensions);


  // Resources section js start 
  const tabs = document.querySelectorAll(".tab-item");
  const contents = document.querySelectorAll(".resources_row");

  let splideInstances = [];

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      let rel = this.getAttribute("data-rel");

      tabs.forEach(t => t.classList.remove("activelink"));
      this.classList.add("activelink");

      contents.forEach(content => content.classList.remove("active"));

      const target = document.getElementById(rel);
      target.classList.add("active");


    });
  });

  // Resources Section js start
  document.querySelectorAll('.resources_slider').forEach(slider => {
    const splide = new Splide(slider, {
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: true,
      gap: '4.875rem',
      focus: 'center',
      breakpoints: {
        1024: { perPage: 2 },
        640: { perPage: 1 },
      }
    });
    splide.mount();
  });
  });




 const sliderContainer = document.querySelector('.serve_featured_insurance_slider');
  const slides = sliderContainer.querySelectorAll('.swiper-slide');
  const slideCount = slides.length;

    new Swiper('.serve_featured_insurance_slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
     breakpoints: {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 30,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 2,
      spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
      spaceBetween: 20,
  }
}
    });


  // Click effect to add red border
  document.querySelectorAll('.featured_insurance_col').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.featured_insurance_col').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });


 
  

$('.serve_featured_insurance_slider .swiper-wrapper .swiper-slide').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});


$('.serva_inner_menu .serva_nav li a').on('click', function(e){
  e.preventDefault();
  $('.serva_inner_menu .serva_nav li a').removeClass('active');
  $(this).addClass('active');
});


// function fixDiv() {
//     var $div = $("#stickynav");
//     if ($(window).scrollTop() > $div.data("top")) { 
//         $('#stickynav').css({'position': 'fixed', 'top': '0', 'width': '100%'}); 
//     }
//     else {
//         $('#stickynav').css({'position': 'static', 'top': 'auto', 'width': '100%'});
//     }
// }

// $("#stickynav").data("top", $("#stickynav").offset().top); // set original position on load
// $(window).scroll(fixDiv);



$(document).ready(function () {
  function lazyInitializeSticky($div) {
    // Skip if already initialized
    if ($div.data('sticky-init')) return;

    var $placeholder = $div.prev('.sticky-placeholder');

    // Add placeholder if not present
    if ($placeholder.length === 0) {
      $placeholder = $('<div class="sticky-placeholder"></div>').insertBefore($div);
    }

    // Hide before measuring to avoid jump
    $div.css({ visibility: 'hidden', position: 'static', top: 'auto', width: '' });

    // Wait for layout to settle
    setTimeout(() => {
      $placeholder.height($div.outerHeight()).hide();
      $div.data("top", $div.offset().top);
      $div.css({ visibility: 'visible' });

      $div.data('sticky-init', true); // mark as initialized
      fixDiv(); // run sticky check
    }, 50);
  }

  function fixDiv() {
    $('.stickynav').each(function () {
      var $div = $(this);
      var top = $div.data("top");
      var $placeholder = $div.prev('.sticky-placeholder');

      if (!top) return; // skip if not yet initialized

      if ($(window).scrollTop() > top) {
        if (!$div.hasClass('is-sticky')) {
          $div.addClass('is-sticky').css({ position: 'fixed', top: '0', width: '100%', zIndex: 999 });
          $placeholder.show();
        }
      } else {
        if ($div.hasClass('is-sticky')) {
          $div.removeClass('is-sticky').css({ position: 'static', top: 'auto', width: '' });
          $placeholder.hide();
        }
      }
    });
  }

  // On scroll
  $(window).on('scroll', fixDiv);

  // On tab change
  $('.featured_tabbing').on('click', function () {
    setTimeout(() => {
      $('.stickynav:visible').each(function () {
        lazyInitializeSticky($(this)); // only lazy init visible ones
      });
    }, 300); // adjust delay to match tab animation
  });

  // Initial run on page load
  setTimeout(() => {
    $('.stickynav:visible').each(function () {
      lazyInitializeSticky($(this));
    });
  }, 150);
});


   $('.policy_tabbing').on("click",function(){  
            $(".policy_details_table").removeClass('active');
            $(".policy_details_table[data-id='"+$(this).attr('data-id')+"']").addClass("active");
            $(".policy_tabbing").removeClass('active');
            $(this).parent().find(".policy_tabbing").addClass('active');
        });

if ($('.addons-slider').length) {
    var solutionSlider = new Swiper('.addons-slider', {
        centeredSlides: true,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3.5, // Default for large screens
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: ".next-btn-addon",
            prevEl: ".prev-btn-addon"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
             820: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2.5
            },
             1199: {
                slidesPerView: 3.5
            }
        }
    });
}


 
      $(".accordion-list li").on('click', function(){
        $(".accordion-list li").removeClass('active');
        $(this).addClass('active');
    });



     $('.manufacturing').on("click",function(){  
            $(".everything_content").removeClass('active');
            $(".everything_content[data-id='"+$(this).attr('data-id')+"']").addClass("active");
            $(".manufacturing").removeClass('active');
            $(this).parent().find(".manufacturing").addClass('active');
        });



     $('.featured_tabbing').on("click",function(){  
            $(".serva_inner_sec").removeClass('active');
            $(".serva_inner_sec[data-id='"+$(this).attr('data-id')+"']").addClass("active");
            $(".featured_tabbing").removeClass('active');
            $(this).parent().find(".featured_tabbing").addClass('active');
            
        });


$(document).on('click', '.featured_tabbing', function(){
  $(this).addClass('active').siblings().removeClass('active')
})
        

const navLinks = document.querySelectorAll('.serva_nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove existing active class
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');

      // Scroll to the target section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  
