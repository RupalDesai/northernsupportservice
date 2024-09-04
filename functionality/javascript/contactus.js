document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the button that opens the modal
    var btn = document.getElementById("openModalBtn");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  });
  

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const referral = document.getElementById('referral').value;

    const data = {
        service_id: 'service_q2debbn',
        template_id: 'template_3bk8v1k',
        user_id: '8yddtZXCraQjrxFhe',
        template_params: {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message,
            'referral': referral
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


document.getElementById('contactForm2').addEventListener('submit', function(event) {
    event.preventDefault();

    const pname = document.getElementById('pname').value;
    const pndisNumber = document.getElementById('pndisNumber').value;
    const pdate = document.getElementById('pdate').value;
    const pphone = document.getElementById('pphone').value;
    const pemail =  document.getElementById('pemail').value;
    const pAddress = document.getElementById('pAddress').value;

    const rname = document.getElementById('rname').value;
    const rorgname = document.getElementById('rorgname').value;
    const rphone = document.getElementById('rphone').value;
    const remail = document.getElementById('remail').value;

    const otherDetails =  document.getElementById('otherDetails').value;
    
    const data = {
        service_id: 'service_q2debbn',
        template_id: 'template_z0ap21y',
        user_id: '8yddtZXCraQjrxFhe',
        template_params: {
            'pname': pname,
            'pndisNumber': pndisNumber,
            'pdate': pdate,
            'pphone': pphone,
            'pemail': pemail,
            'pAddress': pAddress,
            'rname': rname,
            'rorgname': rorgname,
            'rphone': rphone,
            'remail': remail,
            'otherDetails': otherDetails
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
        document.getElementById('responseMessage').innerText = 'Thank you for submitting the form. We will get back to you ASAP. ';
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementById('contactForm2').reset();
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