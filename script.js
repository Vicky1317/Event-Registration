// Script.js

// Get form and summary elements
const registrationForm = document.getElementById('registrationForm');
const totalCount = document.getElementById('totalCount');
const presentCount = document.getElementById('presentCount');
const absentCount = document.getElementById('absentCount');

// Retrieve participants from localstorage or give empty array
let participants = JSON.parse(localStorage.getItem('participants')) || [];

// update summary
function updateSummary() {
  const total = participants.length;
  const present = participants.filter(p => p.attendance === 'Present').length;
  const absent = participants.filter(p => p.attendance === 'Absent').length;

  totalCount.textContent = total;
  presentCount.textContent = present;
  absentCount.textContent = absent;
}

// save participants to localStorage
function saveParticipants() {
  localStorage.setItem('participants', JSON.stringify(participants));
  updateSummary();
}

// Handle Form Submission
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const organization = document.getElementById('organization').value.trim();
  const session = document.getElementById('session').value;

  if (!name || !email) {
    alert('Please fill out the required fields: Name and Email.');
    return;
  }
//Check valid email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Create a new participant object
  const newParticipant = {
    id: Date.now(), 
    name,
    email,
    organization,
    session,
    attendance: 'Absent'
  };

  // Add the list
  participants.push(newParticipant);
  saveParticipants();

  // Reset 
  registrationForm.reset();
  alert('Participant registered successfully!');
});

//Finally Initialize
updateSummary();
