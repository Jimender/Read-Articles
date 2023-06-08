// Fetch the daily fact
fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  .then(response => response.json())
  .then(data => {
    const fact = data.text;
    document.getElementById('fact').textContent = fact;
  })
  .catch(error => {
    console.log('Error fetching fact:', error);
    // Handle the error gracefully
  });
