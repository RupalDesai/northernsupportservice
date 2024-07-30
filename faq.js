// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-question');
  
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        // Toggle the active state for the clicked question
        this.classList.toggle('active');
  
        // Get the corresponding answer element
        const answer = this.nextElementSibling;
  
        // Toggle the display of the answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.textContent = '-';
        } else {
          answer.style.display = 'block';
          icon.textContent = '+';
        }
      });
    });
  });
  