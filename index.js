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