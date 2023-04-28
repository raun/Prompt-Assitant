function updateTextField() {
  var optionSelector = document.getElementById("option-selector");
  var textField = document.getElementById("text-field");

  if (optionSelector.value == "blog-post") {
    textField.value = "This is a sample blog post.";
  } else if (optionSelector.value == "curriculum-module") {
    textField.value = "This is a sample curriculum module.";
  }
}

document.getElementById("option-selector").addEventListener("change", function() {
  updateTextField();
});

document.addEventListener("DOMContentLoaded", function() {
  updateTextField();
});

