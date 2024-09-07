//html connection vraiables
const dateInput = document.getElementById('dob');  
const email = document.getElementById('email');
const regform = document.getElementById('form-submission');


document.addEventListener('DOMContentLoaded', function () {
  // Minimum age of 18 years
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 55); 
  dateInput.min = minDate.toISOString().split("T")[0];

  // Maximum age of 55 years
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18); 
  dateInput.max = maxDate.toISOString().split("T")[0];
  displayDetails();
});



email.addEventListener("input", () => validateEmail(email));
function validateEmail(e) {
  if (e.validity.typeMismatch) {
      e.setCustomValidity("Please enter a valid email address.");
      e.reportValidity();
  } else {
      e.setCustomValidity(""); 
}
}




function getElements(){
   let entries  = localStorage.getItem('user-data');
   return entries ?  JSON.parse(entries) : [];
}

let entries = getElements();


function saveForm(event){
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const tandc=document.getElementById("temsandcondition").checked;

  let  user ={
    name,email,password,dob,tandc
  }
   entries.push(user);
   localStorage.setItem('user-data',JSON.stringify(entries));
   event.target.reset();
   displayDetails();
}

function displayDetails() {
  let tbody = document.getElementById("tablebody");
  if (entries) {
    const tabledata = entries.map((e) => {
      let name = `<td class="px-4 py-2 border min-w-fit">${e.name}</td>`;
      let email = `<td class="px-4 py-2 border min-w-fit">${e.email}</td>`;
      let password = `<td class="px-4 py-2 border min-w-fit">${e.password}</td>`;
      let dob = `<td class="px-4 py-2 border min-w-fit">${e.dob}</td>`;
      let tandc = `<td class="px-4 py-2 border min-w-fit">${e.tandc}</td>`;
      let row = `<tr class="bg-gray-100 border-b"> ${name} ${email} ${password} ${dob} ${tandc}</tr>`;
      return row;
  }).join("\n");

  tbody.innerHTML = tabledata;
  }
}

regform.addEventListener('submit', saveForm);

regform.addEventListener('submit',saveForm);

