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