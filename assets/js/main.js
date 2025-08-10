
    // small inline script for year and smooth scroll
    document.getElementById('year').textContent = new Date().getFullYear();

    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  

  document.addEventListener('DOMContentLoaded', function() {
  const role = localStorage.getItem('role');
  if (role === 'admin') {
    document.getElementById('adminBtn').style.display = 'block';
  }
});

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const adminBtn = document.querySelector('a[href="admin.html"]');

if (!loggedInUser || loggedInUser.role !== "admin") {
    if (adminBtn) {
        adminBtn.style.display = "none"; // إخفاء زر الأدمن
    }
}