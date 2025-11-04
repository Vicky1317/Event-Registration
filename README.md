# Event-Registration
# 🎟️ Event Registration & Attendance Tracker

A simple, beginner-friendly web app built using **HTML, CSS, and JavaScript**.  
It allows users to register participants for an event, mark attendance, and track attendance status — all with data stored in the browser using **localStorage**.

---

## 🌟 Features

- 📝 **Participant Registration**
  - Add participant details with validation.
  - Fields: Name, Email, Organization, Session.

- 📋 **Attendance Management**
  - Mark participants as **Present** or **Absent**.
  - Auto-mark as Absent after timer ends.

- 📊 **Summary Dashboard**
  - View total, present, and absent counts updated live.

- 💾 **Persistent Storage**
  - Data saved locally in browser `localStorage`.

- 📤 **CSV Export**
  - Export all registration data and attendance records to a CSV file.

- ⏱ **Auto Attendance Timer**
  - Starts countdown and auto-marks unmarked participants as absent.

---

## 🖥️ Pages

| Page | Description |
|------|--------------|
| `index.html` | Registration form + Summary dashboard |
| `participants.html` | Participant list + Attendance actions + Timer + CSV export |

---

## 🧠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Storage:** Browser LocalStorage (no backend)
- **Design Style:** Soft colors, gradients, rounded corners, and responsive layout

---

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/event-attendance-tracker.git
