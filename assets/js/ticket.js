document.addEventListener("DOMContentLoaded", () => {
  const ticketNumber = document.getElementById("ticketNumber");
  const ticketName = document.getElementById("ticketName");
  const ticketBranch = document.getElementById("ticketBranch");
  const ticketService = document.getElementById("ticketService");
  const ticketDate = document.getElementById("ticketDate");
  const ticketTime = document.getElementById("ticketTime");
  const ticketWait = document.getElementById("ticketWait");
  const status = document.getElementById("status");
  const cancelBtn = document.getElementById("cancelBtn");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const currentBooking = JSON.parse(localStorage.getItem("currentBooking"));

  if (currentBooking) {
    ticketNumber.textContent = currentBooking.ticketNumber;
    ticketName.textContent = loggedInUser?.username || "Guest";
    ticketBranch.textContent = currentBooking.branch;
    ticketService.textContent = currentBooking.service;
    ticketDate.textContent = currentBooking.date;
    ticketTime.textContent = currentBooking.time;
    ticketWait.textContent = currentBooking.wait;
    status.textContent = currentBooking.status;
  } else {
    document.querySelector(".ticket-card").innerHTML = "<p>No booking found.</p>";
  }

  cancelBtn.addEventListener("click", () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const index = bookings.findIndex((b) => b.id === currentBooking.id);

    if (index !== -1) {
      bookings.splice(index, 1);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      localStorage.removeItem("currentBooking");
      alert("Booking cancelled.");
      window.location.href = "index.html";
    }
  });
});
