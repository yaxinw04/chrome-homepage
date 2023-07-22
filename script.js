document.addEventListener("keydown", function (event) {
  if (event.key === "l" || event.key === "L") {
    // Trigger the click event for the Example Website link
    //const uwLearn = document.querySelector(
    //  'a[href="https://learn.uwaterloo.ca/d2l/home"]'
    //);
    //if (uwLearn) {
    //  uwLearn.click();
    //}
    const uwLearn = document.createElement("a");
    // Set the link's URL
    uwLearn.href = "https://learn.uwaterloo.ca/d2l/home";
    // Set the target attribute to "_blank" to open in a new tab
    uwLearn.target = "_blank";
    // Simulate a click on the anchor element to open in a new tab
    uw.click();
  }

  // Check if the "G" key is pressed
  if (event.key === "g" || event.key === "G") {
    // Trigger the click event for the Google link
    const googleLink = document.querySelector(
      'a[href="https://www.google.com"]'
    );
    if (googleLink) {
      googleLink.click();
    }
  }
  // Add more keyboard shortcuts for other links if needed
});
