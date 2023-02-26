import "../sass/main.scss";
import "../images/preloader.svg";
import "./global";
import "lazysizes";
import "lazysizes/plugins/rias/ls.rias";
import "lazysizes/plugins/blur-up/ls.blur-up";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import AWN from "awesome-notifications";

$(window).on("scroll", function () {
  // var headerOffset = $('#mainHeader').height() /;
  // var header = $('#mainHeader'),
  // scroll = $(window).scrollTop();
  // // Offset greater than 0
  // scroll >= headerOffset ?
  // header.addClass('fixed-top') :
  // header.removeClass('fixed-top');
});

$("#footer-newsletter-form").on("submit", (e) => {
  e.preventDefault();
  const formData = {
    email: $("#footer-newsletter-form").find("input[name='email']").val(),
  };
  // Create new promise to handle notifications with awesome-notifications
  const promise = $.ajax({
    url: global_vars.ajaxurl,
    type: "POST",
    data: {
      action: "theme_send_newsletter_form",
      security: global_vars.footer_newsletter_nonce,
      form: JSON.stringify(formData),
    },
  });
  // Handle response behavior with awesome-notifications
  let notifier = new AWN();
  notifier.asyncBlock(
    promise,
    // On success
    function (response) {
      const errors = response.data;
      // Check for errors
      if (errors.length <= 0) {
        // Handle ajax success
        notifier.success(global_vars.AWN_newsletter_success);
      } else {
        notifier.alert(global_vars.AWN_error);
      }
    },
    // On reject
    function (response) {
      notifier.alert(global_vars.AWN_error);
    }
  );
});

$(".header-menu-cart .cart-dropdown").on("click", function () {
  if ($(window).width() < 1024) {
    window.location.replace(`${window.location.origin}/cart`);
    return;
  }
  const cartDropdownMenu = $(".header-menu-cart").find(".cart-dropdown-menu");
  if (cartDropdownMenu.hasClass("d-none")) {
    $(this).addClass("shadow");
    cartDropdownMenu.removeClass("d-none");
  } else {
    $(this).removeClass("shadow");
    cartDropdownMenu.addClass("d-none");
  }
});

$(".cart-dropdown-menu").on("mouseleave", function () {
  $(this).addClass("d-none");
});
