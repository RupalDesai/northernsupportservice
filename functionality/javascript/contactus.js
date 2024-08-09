document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const data = {
        service_id: 'service_p3zr1fp',
        template_id: 'template_661e1n5',
        user_id: '8yddtZXCraQjrxFhe',
        template_params: {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'An error occurred while sending the message.';
        document.getElementById('responseMessage').style.display = 'block';
    });
});

window.addEventListener('load', function() {
    document.querySelector('.containerRotate').classList.add('visible');
});