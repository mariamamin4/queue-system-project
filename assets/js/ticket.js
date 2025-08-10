const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

const myBooking = bookings.find(b => b.username === loggedInUser?.username && b.status === "waiting");

if (myBooking) {
    document.getElementById('ticketNumber').textContent = myBooking.ticketNumber;
    document.getElementById('ticketName').textContent = myBooking.name;
    document.getElementById('ticketBranch').textContent = myBooking.branch;
    document.getElementById('ticketService').textContent = myBooking.service;
    document.getElementById('ticketDate').textContent = myBooking.date;
    document.getElementById('ticketTime').textContent = myBooking.time;
    document.getElementById('status').textContent = myBooking.status;

    const waitTime = Math.floor(Math.random() * 20) + 5;
    document.getElementById('ticketWait').textContent = `${waitTime} minutes`;
} else {
    window.location.href = 'booking.html';
}

document.getElementById('cancelBtn').addEventListener('click', function() {
    if (confirm("Are you sure you want to cancel this booking?")) {
        const updatedBookings = bookings.filter(b => !(b.username === loggedInUser.username && b.status === "waiting"));
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        alert("Your booking has been cancelled.");
        window.location.href = 'index.html';
    }
});
