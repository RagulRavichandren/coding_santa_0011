🧑‍💼 Employee Directory Web App

A simple and responsive Employee Directory built using HTML, CSS, and JavaScript.
This project allows users to search and filter employees by department in an easy-to-use interface.


---

📋 Features

🔍 Search Employees by name

🏢 Filter by Department (IT, HR, Finance, Sales)

💳 Employee Cards showing photo, name, department, and role

🎨 Responsive Grid Layout using CSS Grid

⚡ Dynamic Rendering with JavaScript

🧠 Dummy Data (can later be replaced with an API or database)



---

🧩 Project Structure

employee-directory/
│
├── index.html        # Main HTML structure
├── style.css         # CSS styling for layout and design
└── script.js         # JavaScript logic for filtering and rendering


---

💻 index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name...">
    <select id="filterDept">
      <option value="">All Departments</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
      <option value="Sales">Sales</option>
    </select>
  </header>

  <main>
    <div id="employeeList" class="employee-list"></div>
  </main>

  <script src="script.js"></script>
</body>
</html>


---

🎨 style.css

/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  line-height: 1.6;
}

header {
  background: #5087be;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header input,
header select {
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 5px;
  border: none;
}

.employee-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.card {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}


---

⚙️ script.js

// Dummy employee data (replace later with API fetch)
const employees = [
  { id: 1, name: "Alice Johnson", department: "IT", role: "Software Engineer", img: "https://i.pravatar.cc/80?img=1" },
  { id: 2, name: "Bob Smith", department: "HR", role: "HR Manager", img: "https://i.pravatar.cc/80?img=2" },
  { id: 3, name: "Carol Lee", department: "Finance", role: "Accountant", img: "https://i.pravatar.cc/80?img=3" },
  { id: 4, name: "David Kim", department: "Sales", role: "Sales Executive", img: "https://i.pravatar.cc/80?img=4" },
  { id: 5, name: "Eva Brown", department: "IT", role: "UI/UX Designer", img: "https://i.pravatar.cc/80?img=5" }
];

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const filterDept = document.getElementById("filterDept");

// Render employees
function renderEmployees(data) {
  employeeList.innerHTML = "";
  if (data.length === 0) {
    employeeList.innerHTML = "<p>No employees found</p>";
    return;
  }

  data.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${emp.img}" alt="${emp.name}">
      <h3>${emp.name}</h3>
      <p><strong>Dept:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
    `;
    employeeList.appendChild(card);
  });
}

// Search + Filter logic
function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const dept = filterDept.value;

  const filtered = employees.filter(emp => {
    const matchesName = emp.name.toLowerCase().includes(searchText);
    const matchesDept = dept === "" || emp.department === dept;
    return matchesName && matchesDept;
  });

  renderEmployees(filtered);
}

// Event Listeners
searchInput.addEventListener("input", applyFilters);
filterDept.addEventListener("change", applyFilters);

// Initial render
renderEmployees(employees);


---

🚀 How to Run

1. Download or clone this repository.


2. Open index.html in your web browser.


3. Start searching and filtering employees instantly!




---

🧠 Future Enhancements

Integrate real employee data via an API or database.

Add pagination for large datasets.

Include sorting options (by name, department, etc.).

Add edit/delete features for employee management.



---

Would you like me to create this as a README.md file (ready to download)?

