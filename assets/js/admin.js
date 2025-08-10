const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser || loggedInUser.role !== "admin") {
    alert("Access denied! Please login as admin.");
    window.location.href = "login.html";
}


// جلب بيانات الحجز من localStorage
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

localStorage.setItem('bookings', JSON.stringify(bookings));

// عرض الحجوزات في الجدول
function renderQueue() {
    const tableBody = document.getElementById('queueTable');
    tableBody.innerHTML = '';

    if (bookings.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No bookings in queue</td></tr>`;
        return;
    }

    bookings.forEach((b, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${b.ticketNumber}</td>
                <td>${b.name}</td>
                <td>${b.branch}</td>
                <td>${b.service}</td>
                <td>${b.status}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="callTicket(${index})">Call</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTicket(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// نداء التذكرة
function callTicket(index) {
    bookings[index].status = "called";
    localStorage.setItem('currentBooking', JSON.stringify(bookings[index]));
    renderQueue();
    alert(`Ticket #${bookings[index].ticketNumber} has been called`);
}

// حذف التذكرة
function deleteTicket(index) {
    if (confirm("Delete this ticket?")) {
        bookings.splice(index, 1);
        localStorage.removeItem('currentBooking');
        renderQueue();
    }
}

// زر "Call Next"
document.getElementById('callNextBtn').addEventListener('click', function() {
    if (bookings.length > 0) {
        callTicket(0);
    } else {
        alert("No tickets to call");
    }
});

// زر "Clear All"
document.getElementById('clearAllBtn').addEventListener('click', function() {
    if (confirm("Clear all bookings?")) {
        bookings = [];
        localStorage.removeItem('currentBooking');
        renderQueue();
    }
});

// تشغيل أول مرة
renderQueue();
