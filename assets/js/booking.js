const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser || loggedInUser.role !== "user") {
    alert("Please login first.");
    window.location.href = "login.html";
}


document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // اجمع البيانات من الفورم
    const bookingData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        branch: document.getElementById('branch').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        ticketNumber: Math.floor(Math.random() * 9000) + 1000, // رقم عشوائي للتذكرة
        status: "waiting",
         username: loggedInUser.username
    };

    // خزّن البيانات في localStorage
 let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
bookings.push(bookingData);
localStorage.setItem('bookings', JSON.stringify(bookings));

    // انتقل لصفحة التذكرة
    window.location.href = 'ticket.html';
});
