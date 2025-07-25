// Toggle dark/light mode
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Download PDF (basic print method for now)
document.getElementById('downloadPDF').addEventListener('click', () => {
  window.print();
});
