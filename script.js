// Fetch the daily fact from the API
fetch("http://numbersapi.com/random")
  .then((response) => response.text())
  .then((data) => {
    // Display the fact in the HTML
    const factElement = document.getElementById("fact");
    factElement.textContent = data;
  })
  .catch((error) => {
    console.log("Error fetching the daily fact:", error);
  });
