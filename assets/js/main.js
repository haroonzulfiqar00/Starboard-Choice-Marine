$(document).ready(function () {
  // Initialize Owl Carousel
  if ($("#servicesCarousel").length) {
    $("#servicesCarousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 },
      },
    });
  }

  if ($(".inventory-carousel").length) {
    $(".inventory-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 800,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  if ($(".testimonial-carousel").length) {
    var testimonialOwl = $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 800,
    });

    // Custom Navigation Events
    $(".testimonial-prev").click(function () {
      testimonialOwl.trigger("prev.owl.carousel");
    });
    $(".testimonial-next").click(function () {
      testimonialOwl.trigger("next.owl.carousel");
    });
  }

  // Initialize intl-tel-input
  const phoneInput = document.querySelector("#phone");
  if (phoneInput) {
    window.intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () {}, "jsonp").always(
          function (resp) {
            var countryCode = resp && resp.country ? resp.country : "us";
            success(countryCode);
          },
        );
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  }

  // Example Slick Slider initialization (if any element exists)
  // $('.slick-slider').slick({
  //     dots: true,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1
  // });

  // Fancybox initialization
  $("[data-fancybox]").fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
  });

  // jQuery UI Datepicker example
  if ($(".datepicker").length) {
    $(".datepicker").datepicker();
  }

  // Navbar scroll effect
  // $(window).scroll(function() {
  //     if ($(window).scrollTop() > 50) {
  //         $('.main-header').addClass('scrolled shadow-lg');
  //     } else {
  //         $('.main-header').removeClass('scrolled shadow-lg');
  //     }
  // });

  // Navigation Logic

  // Toggle Mega Menus
  $(".mega-trigger").on("click", function (e) {
    e.preventDefault();
    const target = $(this).data("target");
    const isActive = $(target).hasClass("active");

    // Close all mega menus first
    $(".mega-menu").not(target).removeClass("active");
    $(".mega-trigger")
      .not(this)
      .find("i")
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");

    // Toggle the target
    $(target).toggleClass("active");
    $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");

    // Add class to header when any mega menu is active
    if ($(".mega-menu.active").length > 0) {
      $(".main-header").addClass("mega-active");
    } else {
      $(".main-header").removeClass("mega-active");
    }
  });

  // Close Mega Menu when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".has-mega, .mega-menu").length) {
      $(".mega-menu").removeClass("active");
      $(".mega-trigger i")
        .removeClass("fa-chevron-up")
        .addClass("fa-chevron-down");
      $(".main-header").removeClass("mega-active");
    }
  });

  // Sidebar / Company Toggle
  $("#company-btn, .close-sidebar, .sidebar-overlay").on("click", function (e) {
    if ($(window).width() < 992) {
      // Mobile: Toggle full nav
      $("#mobile-nav, .sidebar-overlay").toggleClass("active");
    } else {
      // Desktop: Toggle company sidebar
      $("#menu-company, .sidebar-overlay").toggleClass("active");
    }
    $("body").toggleClass("overflow-hidden");
  });

  // Mobile Accordion
  $(".accordion-header").on("click", function () {
    const target = $(this).data("target");
    $(target).slideToggle();
    $(this).find("i").toggleClass("fa-plus fa-minus");
  });

  // Footer Accordion (Mobile)
  $(".footer-accordion-toggle").on("click", function () {
    if ($(window).width() < 992) {
      const $list = $(this).next(".footer-nav-list");
      const $icon = $(this).find("i");

      $list.slideToggle(300);

      // Toggle plus/minus icon
      if ($icon.hasClass("fa-plus")) {
        $icon.removeClass("fa-plus").addClass("fa-minus");
      } else {
        $icon.removeClass("fa-minus").addClass("fa-plus");
      }
    }
  });

  // Show More / Less for Service Item Text
  $(".specials-section .services-grid-item").each(function () {
    var $text = $(this).find(".services-item-text").last();

    // Add collapsed class and check if it overflows
    $text.addClass("collapsed");

    if ($text[0].scrollHeight > $text[0].clientHeight) {
      // Only add button if text exceeds 3 lines
      $text.after('<span class="show-more-btn">Read More</span>');
    } else {
      // Remove class if it doesn't overflow
      $text.removeClass("collapsed");
    }
  });

  $(document).on("click", ".show-more-btn", function () {
    var $text = $(this).prev(".services-item-text");
    if ($text.hasClass("collapsed")) {
      $text.removeClass("collapsed");
      $(this).text("Read Less");
    } else {
      $text.addClass("collapsed");
      $(this).text("Read More");
    }
  });

  if ($(".story-carousel").length) {
    $(".story-carousel").owlCarousel({
      center: true,
      loop: false,
      margin: 30,
      nav: false,
      dots: false,
      autoWidth: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1.2,
          autoWidth: false,
          margin: 15,
        },
        992: {
          items: 1,
          autoWidth: true,
        },
      },
    });
  }

  console.log("Starboard Choice Marine Template Initialized!");
});
