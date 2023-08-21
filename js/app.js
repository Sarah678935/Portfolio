// Function to apply dark mode styles
function applyDarkModeStyles() {
    document.body.style.backgroundColor = "#tce9e2";
    document.body.style.color = "#ffffff";
    // Add more style adjustments as needed
  }
  
  // Function to apply light mode styles
  function applyLightModeStyles() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333333";
    // Add more style adjustments as needed
  }
  
  // Listen for changes in color scheme preference
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Function to handle changes in color scheme preference
  function handleColorSchemeChange(e) {
    if (e.matches) {
      applyDarkModeStyles();
    } else {
      applyLightModeStyles();
    }
  }
  
  // Initial call to apply styles based on current color scheme preference
  handleColorSchemeChange(darkModeMediaQuery); 
  
  // Attach event listener to handle future changes
  darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);




  ///// Burger button 
  // Check if the viewport width is less than 768px (small screen)
  const burger = document.getElementById('burger');
  const overlay = document.querySelector('.overlay');
  
  burger.addEventListener('change', () => {
    if (burger.checked) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  });
  







