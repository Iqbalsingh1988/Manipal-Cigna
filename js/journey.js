(function ($) {

  
$(".get_quote_btn").click(function() {
  $(".otp_box_main").fadeIn(500);
   $("body").addClass("hidde_scroll");
});

$(".close").click(function() {
  $(".otp_box_main").fadeOut(500);
  $("body").removeClass("hidde_scroll");
});



  $(".edit_detail_btn").click(function() {
    $(".detail_popup").fadeIn(500);
     $("body").addClass("hidde_scroll");
  });

  $(".close").click(function() {
    $(".detail_popup").fadeOut(500);
    $("body").removeClass("hidde_scroll");
  });




  $(".click_policy_popup").click(function() {
    $(".cover_policy_add_popup").fadeIn(500);
    $("body").addClass("hidde_scroll");
  });

  $(".close").click(function() {
    $(".cover_policy_add_popup").fadeOut(500);
    $("body").removeClass("hidde_scroll");
  });





  $(".at-title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".at-tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".at-tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });



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



	


      new Splide('.stay_covered_slider', {
        type: 'loop',
        cover  : true,
        autoplay:true,
        interval: 4000,
        speed: 4000,
        perPage: 1,
        perMove: 1,
        arrows: false,
        pagination: true,
        // gap: '2rem',
        breakpoints: {
        1024: {
            perPage: 1,
        },
        640: {
            perPage: 1,
            perMove: 1,
            // focus: 'center',
            // gap: '1rem',
        },

        
            
        }
    }).mount();


    new Splide('.policy_slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: true,
        gap: '2rem',
        focus: 'center',
        breakpoints: {
        1024: {
            perPage: 2,
        },
        640: {
            perPage: 1,
            perMove: 1,
             gap: '1rem',
        },

        
            
        }
    }).mount();


   


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
    




  $(".policy_load").slice(0, 6).show();
		$("body").on('click touchstart', '.seeMore', function (e) {
			e.preventDefault();
			$(".policy_load:hidden").slice(0, 2).slideDown();
			if ($(".policy_load:hidden").length == 0) {
				$(".seeMore").css('visibility', 'hidden');
			}
	});



  $('.mobile_toggle_detail').on('click', function() {
      $(this).next().toggleClass('active'); 
      $(this).toggleClass('active'); 
  });





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





})(jQuery);






  $(document).ready(function () {
  let currentStep = 0;
  const steps = $(".form_step");

  function showStep(index) {
    steps.removeClass("form-step-active");
    steps.eq(index).addClass("form-step-active");
  }

  // Show the first step on page load
  showStep(currentStep);

  $(".next-btn").on("click", function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  $(".prev-btn").on("click", function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});



  
// start otp popup js code


(function () {
  const element = document.querySelector("aside");
  const regex = /^[a-zA-Z0-9]$/;

  if (!element) return; // Safety check if aside doesn't exist

  element.addEventListener("keydown", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (e.ctrlKey || e.altKey) return;

    const { key, code, target } = e;

    // Allow navigation and deletion
    const isValidKey =
      regex.test(key) ||
      code === "Backspace" ||
      code === "Delete" ||
      code === "ArrowLeft" ||
      code === "ArrowRight";

    if (!isValidKey) {
      e.preventDefault();
      return;
    }

    // Set input value and focus next/prev
    if (!(code === "ArrowLeft" || code === "ArrowRight")) {
      target.value = (code === "Backspace" || code === "Delete") ? "" : key;
    }

    // Move focus
    if (code === "Backspace" || code === "ArrowLeft") {
      target.previousElementSibling?.focus();
    } else {
      target.nextElementSibling?.focus();
    }

    e.preventDefault();
  });

  element.addEventListener("paste", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const parent = e.target.parentElement;
    if (!parent) return;

    const pasteData = e.clipboardData?.getData("text") || "";
    const inputs = parent.querySelectorAll("input");

    pasteData
      .slice(0, inputs.length)
      .split("")
      .forEach((char, index) => {
        if (regex.test(char)) {
          inputs[index].value = char;
        } else {
          inputs[index].value = "";
        }
      });

    // Focus the last filled input
    inputs[Math.min(pasteData.length - 1, inputs.length - 1)]?.focus();

    e.preventDefault();
  });
})();

// end otp popup js code



// start quality input plus minus js code

(function () {
  const quantityContainers = document.querySelectorAll(".quantity");

  quantityContainers.forEach((quantityContainer) => {
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");

    updateButtonStates();

    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);

    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }

    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }

    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }

    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }

    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;

      // Custom logic for each quantity box
      console.log("Quantity changed:", value);
    }
  });
})();


// end quality input plus minus js code