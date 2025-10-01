# <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IBM-FE Employee Directory</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search employees by name...">
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




/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color:#f4f4f9;
  color: #333;
  line-height: 1.6;
}

header {
  background: #5087be;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin-bottom: 0.5rem;
}

header input, header select {
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 5px;
  border: none;
}

main {
  padding: 1rem;
}

.employee-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: #2c3e50;
  color:white;
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
