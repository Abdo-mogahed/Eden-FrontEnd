// function switchForm(type) {
//   const individualTab = document.getElementById('individual-tab');
//   const corporateTab = document.getElementById('corporate-tab');
//   const additionalFields = document.getElementById('additional-fields');

//   if (type === 'individual') {
//     individualTab.classList.add('active');
//     corporateTab.classList.remove('active');
//     additionalFields.innerHTML = ''; // Remove extra fields
//   } else {
//     corporateTab.classList.add('active');
//     individualTab.classList.remove('active');
//     additionalFields.innerHTML = '<input type="text" id="company" placeholder="Enter your company name">';
//   }
// }


function switchForm(type) {
  const individualTab = document.getElementById('individual-tab');
  const corporateTab = document.getElementById('corporate-tab');
  const additionalFields = document.getElementById('additional-fields');

  if (type === 'individual') {
    individualTab.classList.add('active');
    corporateTab.classList.remove('active');
    additionalFields.innerHTML = ''; 
  } else {
    corporateTab.classList.add('active');
    individualTab.classList.remove('active');
    additionalFields.innerHTML = `
      <div class="form-field">
        <input type="text" id="company" placeholder="Enter company name">
        <label for="company">Company</label>
      </div>
    `;
  }
}
