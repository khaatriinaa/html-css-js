const bgColors = [
  "#e0e7ff", // light indigo
  "#ffe4e6", // light pink
  "#ecfccb", // light green
  "#e0f7fa", // light aqua
  "#fce4ec", // pastel pink
  "#e8f5e9", // pastel green
  "#ede7f6", // pastel purple
  "#fff9c4", // soft yellow
  "#e1f5fe", // baby blue
  "#f3e5f5", // lavender
  "#f0f4c3", // pale lime
  "#ffecb3", // pale orange
  "#ede9fe"  // pale purple
];

// Change My Projects background to a random color
function changeProjectsBg() {
  const portfolio = document.getElementById("portfolio");
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  portfolio.style.setProperty("background-color", randomColor, "important"); // override Bootstrap
}

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {

  // Navbar "Projects" link → scroll + change background
  document.getElementById("projects-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
    changeProjectsBg();
  });

  // Click any project card → change background
  document.querySelectorAll("#portfolio .card").forEach(card => {
    card.addEventListener("click", changeProjectsBg);
  });

});

function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false; 
  }

  // Show popup message
  alert("Your message is sent!");

  // Clear the form (optional)
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";

  // Prevent actual form submission (page reload)
  return false;
}
