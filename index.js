button.getElementById('submit').message = 'submited';
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();  


      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

    
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';

      let isValid = true;


      if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
      }

      if (email === '') {
        document.getElementById('emailError').textContent = 'Please enter your email.';
        isValid = false;
      } 


      if (message === '') {
        document.getElementById('messageError').textContent = 'Please enter your message.';
        isValid = false;
      }
        else{
            document.getElementById('all done').textContent  = 'ok your form  has been submitted'
        }
      

   
      
        
      }
    );


   
  


