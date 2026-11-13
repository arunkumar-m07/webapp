
// Activity 5 - Toast Notification

function showToast(message) {

    let toast = document.getElementById("toastMessage");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastMessage";
        toast.className = "toast-message";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Booking Form Notification

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        showToast("🎉 Booking Successful! Thank you for choosing IPL Ticket Booking!");

        setTimeout(function() {
            bookingForm.reset();
        }, 500);

    });

}
