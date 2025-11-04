// PARTICIPANTS.JS
// Handles displaying participants, attendance

const tableBody = document.querySelector('#participantsTable tbody');
let participants = JSON.parse(localStorage.getItem('participants')) || [];

//Display participants
function displayParticipants() {
  tableBody.innerHTML = ''; 

  participants.forEach(participant => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${participant.name}</td>
      <td>${participant.email}</td>
      <td>${participant.organization}</td>
      <td>${participant.session}</td>
      <td>
        <button class="attendance-btn present-btn" data-id="${participant.id}" data-status="Present">Present</button>
        <button class="attendance-btn absent-btn" data-id="${participant.id}" data-status="Absent">Absent</button>
        <button class="attendance-btn delete-btn" data-id="${participant.id}">Delete</button>
      </td>
    `;

    // Highlight based on attendance
    if (participant.attendance === 'Present') {
      row.style.backgroundColor = '#e8f5e9';
    } else if (participant.attendance === 'Absent') {
      row.style.backgroundColor = '#ffebee';
    }

    tableBody.appendChild(row);
  });
}

//Update attendance
function updateAttendance(id, status) {
  participants = participants.map(p => {
    if (p.id === id) {
      p.attendance = status;
    }
    return p;
  });
  localStorage.setItem('participants', JSON.stringify(participants));
  displayParticipants();
}

//Delete participant
function deleteParticipant(id) {
  const confirmDelete = confirm('Are you sure you want to delete this participant?');
  if (!confirmDelete) return;

  participants = participants.filter(p => p.id !== id);
  localStorage.setItem('participants', JSON.stringify(participants));
  displayParticipants();
}

//Handle buttons
tableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('attendance-btn')) {
    const id = Number(e.target.getAttribute('data-id'));

    if (e.target.classList.contains('present-btn')) {
      updateAttendance(id, 'Present');
    } else if (e.target.classList.contains('absent-btn')) {
      updateAttendance(id, 'Absent');
    } else if (e.target.classList.contains('delete-btn')) {
      deleteParticipant(id);
    }
  }
});

//EXPORT TO CSV
document.getElementById('exportBtn').addEventListener('click', function () {
  if (participants.length === 0) {
    alert('No data to export!');
    return;
  }

  // Convert data to CSV format
  const header = ['Name', 'Email', 'Organization', 'Session', 'Attendance'];
  const rows = participants.map(p => [p.name, p.email, p.organization, p.session, p.attendance]);
  const csvContent = [header, ...rows].map(e => e.join(',')).join('\n');

  // Create downloadable file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'attendance.csv';
  link.click();
});


//Initialize table
displayParticipants();
