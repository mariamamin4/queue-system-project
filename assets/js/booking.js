document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // ✅ نجيب آخر رقم تذكرة محفوظ ونزود عليه 1
    let lastTicketNumber = parseInt(localStorage.getItem("lastTicketNumber")) || 0;
    lastTicketNumber++;
    localStorage.setItem("lastTicketNumber", lastTicketNumber);

    const newBooking = {
      id: Date.now(),
      username: loggedInUser?.username,
      service: document.getElementById("service").value,
      branch: document.getElementById("branch").value,
      ticketNumber: lastTicketNumber,
      status: "waiting",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      wait: Math.floor(Math.random() * 15) + 5 + " mins"
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.setItem("currentBooking", JSON.stringify(newBooking));

    // ✅ أول ما يحجز يروح يعرض التذكرة
    window.location.href = "ticket.html";
  });
});
