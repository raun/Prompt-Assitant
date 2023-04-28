// Map selected option to text input label
function getInputLabel(option) {
  switch (option) {
    case "blog-post":
    case "curriculum-module":
      return "Topic";
    case "unit-test":
      return "File URL";
    default:
      return "Enter Text";
  }
}

// Map selected option to a Prompt
function getPromptValue(option) {
  switch (option) {
    case "blog-post":
      return "This is a sample blog post";
    case "curriculum-module":
      return "This is a sample curriculum module";
    case "unit-test":
      return "These are sample tests";
    default:
      return "No data available!";
  }
}

// Function to execute workflows when submit button is clicked
function handleSubmit(value) {
  const generatedPrompt = document.getElementById("generated-prompt");
  const textField = document.getElementById("text-field");

  generatedPrompt.innerHTML = getPromptValue(value);

  alert(textField.value)
  hideResults(false);
}

// Function to execute workflows when option is changed / selected
function updateOption() {
  hideResults(true);
  const optionSelector = document.getElementById("option-selector");
  const textFieldLabel = document.getElementById("text-field-label");
  const textField = document.getElementById("text-field");

  textFieldLabel.innerHTML = getInputLabel(optionSelector.value) + ':';
  textField.value = "";
}

// Setting event listeners when dom elements are loaded.
function setEventListners() {
  const optionSelector = document.getElementById("option-selector");
  const submitButton = document.getElementById("submit-button");
  
  optionSelector.addEventListener("change", function () {
    updateOption();
  });

  submitButton.addEventListener("click", function () {
    handleSubmit(optionSelector.value);
  });
}

// Function to hide and show result and prompts when submit button is created.
function hideResults(value) {
  const resultTitle = document.getElementById('result-title');
  const generatedPrompt = document.getElementById("generated-prompt");
  
  resultTitle.hidden = value;
  generatedPrompt.hidden = value;
}

// Initialise Extention and set event listners when Dom elements are loaded.
document.addEventListener("DOMContentLoaded", function () {
  updateOption();
  setEventListners();
});
