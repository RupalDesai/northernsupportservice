// scripts.js

// Get the modal
var modal = document.getElementById('faqModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Get the question and answer elements inside the modal
var modalQuestion = document.getElementById('modal-question');
var modalAnswer = document.getElementById('modal-answer');

// Sample data (you can replace this with actual data or load dynamically)
var faqs = {
  'What services do you offer?': 'We offer a variety of services including cleaning, gardening, and maintenance. Our team is skilled in handling all sorts of household chores efficiently and professionally.',
  'How can I book a service?': 'You can book a service by visiting our website, selecting the desired service, and filling out the booking form. Alternatively, you can call our customer service line.',
  'What are your operating hours?': 'We operate from Monday to Saturday, 9 AM to 6 PM. We are closed on Sundays and public holidays.'
};

// Get all FAQ questions
var questions = document.querySelectorAll('.faq-question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    var questionText = this.textContent;
    modalQuestion.textContent = questionText;
    modalAnswer.textContent = faqs[questionText];
    modal.style.display = 'block';
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
