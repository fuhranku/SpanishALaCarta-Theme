import "../../sass/pages/contact-us.scss";
import validatePhoneNumber from "../commons/phone-validator";
import AWN from "awesome-notifications";
import intlTelInput from "intl-tel-input";

// intl tel input inits
const contactFormTel = document.querySelector("#contact-form-tel");
export let contactFormPhone = intlTelInput(contactFormTel, {
  autoFormat: true,
  initialCountry: "auto",
  defaultCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io/json", {
      cache: "reload",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed: " + response.status);
      })
      .then((ipjson) => {
        callback(ipjson.country);
      })
      .catch((e) => {
        callback("us");
      });
  },
  utilsScript: process.env.THEME_URL + "assets/build/js/utilsScript.bundle.js",
});

$("#contact-form").on("submit", function (e) {
  // Stop the browser from submitting the form.
  e.preventDefault();
  const serializedData = $("#contact-form").serializeArray();
  const captchaResponse = serializedData.find(
    (obj) => obj.name === "g-recaptcha-response"
  );
  // Validate phone number input first
  const isPhoneValid =
    validatePhoneNumber(contactFormPhone) == true
      ? contactFormPhone.getNumber()
      : 0;
  var phoneErrorMsg = validatePhoneNumber(contactFormPhone);
  const formData = {
    fullName: $("#contact-form").find("input[name='fullName']").val(),
    phoneNumber: isPhoneValid,
    email: $("#contact-form").find("input[name='email']").val(),
    message: $("#contact-form").find("textarea[name='message']").val(),
    captchaResponse: captchaResponse["value"],
  };
  // Empty all errors lists container
  $("ul.error-list").empty();
  // Create new promise to handle notifications with awesome-notifications
  let promise = $.ajax({
    url: global_vars.ajaxurl,
    type: "POST",
    data: {
      action: "theme_send_contact_form",
      security: theme_vars.ajax_nonce,
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
      if (errors.length <= 0 && isPhoneValid) {
        // Handle ajax success
        notifier.success(global_vars.AWN_success);
      } else {
        notifier.alert(global_vars.AWN_error);
        // Inject errors
        if (isPhoneValid != 1) {
          $(`ul.error-list[data-name="phoneNumber"]`).removeClass("d-none");
          $(`ul.error-list[data-name="phoneNumber"]`).append(
            `<li class="text-danger small">${phoneErrorMsg}</li>`
          );
        }
        const errorsArr = Object.entries(errors);
        for (const [field, errors] of errorsArr) {
          for (const error of errors) {
            $(`ul.error-list[data-name="${field}"]`).removeClass("d-none");
            $(`ul.error-list[data-name="${field}"]`).append(
              `<li class="text-danger small">${error}</li>`
            );
          }
        }
      }
    },
    // On reject
    function (response) {
      notifier.alert(global_vars.AWN_error);
    }
  );
});
