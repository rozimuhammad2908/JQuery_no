window.addEventListener("load", function (e) {
  var form_control = document.querySelectorAll(".form-control");
  var form_action = document.querySelector("form");

  form_action.addEventListener("submit", function (e) {
    var i = 0;
    while (i <= form_control.length - 1) {
      var value = form_control[i].value;

      if (value == "") {
        return e.preventDefault();
      }
      i++;
    }
  });
});
