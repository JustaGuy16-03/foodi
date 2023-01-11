$(document).ready(function () {
    $("#view-click").click(function () {
      $("#eye-icon").toggleClass("bi-eye-slash-fill");
      var passInput = $("#floatingPassword");
      if (passInput.attr("type") === "password") {
        passInput.attr("type", "text");
      } else {
        passInput.attr("type", "password");
      }
    });
  });