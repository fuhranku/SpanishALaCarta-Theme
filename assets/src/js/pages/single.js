import "../../sass/pages/single.scss";
import "../../sass/pages/blog.scss";
import AWN from "awesome-notifications";

// import Swiper JS
import Swiper from "swiper";
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

new Swiper(".related-posts .inner-container", {
  slidesPerView: "auto",
  // Optional parameters
  spaceBetween: 30,
  navigation: {
    disabledClass: "categories-control-disabled",
    nextEl: ".categories-button-next",
    prevEl: ".categories-button-prev",
  },
});

$("#single-newsletter-form").on("submit", (e) => {
  e.preventDefault();
  const formData = {
    email: $("#single-newsletter-form").find("input[name='email']").val(),
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

$(".comment-form").on("submit", (e) => {
  e.preventDefault();
  const serializedData = $(".comment-form").serializeArray();
  // Get recaptcha response
  const captchaResponse = serializedData.find(
    (obj) => obj.name === "g-recaptcha-response"
  );
  const formData = {
    name: $(".comment-form").find("input[name='name']").val(),
    email: $(".comment-form").find("input[name='email']").val(),
    message: $(".comment-form").find("textarea[name='message']").val(),
    post_id: $(".comment-form").find("input[name='post_id']").val(),
    captchaResponse: captchaResponse["value"],
  };
  console.log(formData);
  $("ul.error-list").empty();
  // Create new promise to handle notifications with awesome-notifications
  const promise = $.ajax({
    url: global_vars.ajaxurl,
    type: "POST",
    data: {
      action: "theme_send_comment_form",
      security: theme_vars.comment_ajax_nonce,
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
        notifier.success("Your comment is published. Reload to see it!");
      } else {
        notifier.alert(
          "Woops, there's something wrong. Please check your info and try again"
        );
        // Inject errors
        const errorsArr = Object.entries(errors);
        for (const [field, errors] of errorsArr) {
          for (const error of errors) {
            $(".comment-form")
              .find(`ul.error-list[data-name="${field}"]`)
              .removeClass("d-none");
            $(".comment-form")
              .find(`ul.error-list[data-name="${field}"]`)
              .append(`<li class="text-danger small">${error}</li>`);
          }
        }
      }
    },
    // On reject
    function (response) {
      notifier.alert("Something went wrong, please try again later");
    }
  );
});
