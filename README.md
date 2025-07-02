🌐 Domain Dashboard – Watchdog UI
This project is a responsive Angular-based Domain Dashboard built for Drona Systems. It serves as a front-end interface for managing domain records, allowing users to:

✅ Add new domains with status and expiry

🔍 Search domain names dynamically

❌ Remove domain entries

🗃️ Store and retrieve data from a local backend (json-server)

💡 Display all information in a clean, professional Bootstrap UI

🚀 Tech Stack
Angular 17 (Standalone Components)

Bootstrap 5

TypeScript

JSON Server (Mock REST API for backend)

VS Code + Git + GitHub for development and version control

📁 Project Structure
bash
Copy
Edit
domain-dashboard/
├── src/
│   └── app/
│       ├── services/
│       │   └── domain.service.ts     # Handles API calls
│       ├── app.ts                    # Main App Component (Standalone)
│       ├── app.html                  # Template for UI
│       └── app.css                   # Styling for UI
├── db.json                           # JSON Server data file (backend)
├── angular.json                      # Angular config
├── package.json
├── README.md                         # You're reading it
└── ...
🔧 Installation & Usage
1. Install Dependencies
bash
Copy
Edit
npm install
2. Start Backend (JSON Server)
bash
Copy
Edit
npx json-server --watch db.json --port 3000
📍 Backend runs at: http://localhost:3000/domains

3. Start Angular App
bash
Copy
Edit
ng serve
🌐 Open your browser at: http://localhost:4200

📌 Features
Responsive layout using Bootstrap

Domain list table with status badges

Search filtering on the fly

Data is stored/retrieved from backend (db.json)

Color-coded statuses: ✅ Active, ❌ Expired, ⚠️ Inactive

🙋‍♀️ Developer
Afshana Fathima A
🎓 Intern at Drona Systems
📅 July 2025
📍 Chennai, India

📝 Notes
This project is part of an internal domain monitoring system (Watchdog).

Built with simplicity, scalability, and professionalism in mind.

Backend can be replaced with a real API in future enhancements.
