document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const birthDate = new Date();
    const dateInput = document.getElementById('dob');  
    const formattedMaxDate = today.toISOString().split('T')[0];
    birthDate.setFullYear(today.getFullYear() - 55);
    const birthDateString = birthDate.toISOString().split('T')[0];
    dateInput.min = birthDateString;
    dateInput.max = formattedMaxDate;
  });
   

  //validation
  const email = document.getElementById('email');
  email.addEventListener("input",() => validateEmail(email));
   


  function validateEmail(e){
    if (e.validity.typeMismatch) {
      e.setCustomValidity("Please enter a valid email address.");
      e.reportValidity();
    }else{
      e.setCustomValidity(" ")
    }
  }


