// typewriter.js
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('typewriter');
    if (!element) return;
    
    const text = element.textContent; // get the text
    
    // Check if screen is mobile size (768px or less)
    const isMobile = window.innerWidth <= 768;
    
    // Skip typewriter effect on mobile
    if (isMobile) {
        return; // Text stays as-is
    }
    
    element.textContent = '';         // clear it for typing effect
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // speed per character
      }
    }

    type();
});