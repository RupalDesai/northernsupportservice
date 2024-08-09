document.addEventListener('DOMContentLoaded', function() {
  // Select all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('.icon');

    // Toggle the answer and the icon
    question.addEventListener('click', function() {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      question.classList.toggle('active');

      // Update the icon text
      icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
  });
});

window.addEventListener('load', function() {
  document.querySelector('.content').classList.add('visible');
});