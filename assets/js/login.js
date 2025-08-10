document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        // تخزين بيانات المستخدم الحالي
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        // توجيه بناءً على الدور
        if (foundUser.role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "booking.html";
        }
    } else {
        alert("Invalid username or password");
    }
});

