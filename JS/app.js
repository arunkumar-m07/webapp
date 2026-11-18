
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

// Activity 7 - Live Booking Summary

const ticketPrices = {
    "RCB vs CSK": {
        General: 800,
        Premium: 2000,
        VIP: 5000
    },
    "MI vs KKR": {
        General: 1000,
        Premium: 2500,
        VIP: 6000
    },
    "SRH vs RR": {
        General: 900,
        Premium: 2200,
        VIP: 5500
    }
};

// Get booking form elements
const matchSelect = document.getElementById("matchSelect");
const standSelect = document.getElementById("standSelect");
const quantityInput = document.getElementById("quantity");

// Get summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryPrice = document.getElementById("summaryPrice");
const totalPrice = document.getElementById("totalPrice");

// Check whether all required elements exist
if (
    matchSelect &&
    standSelect &&
    quantityInput &&
    summaryMatch &&
    summaryStand &&
    summaryQuantity &&
    summaryPrice &&
    totalPrice
) {

    function updateSummary() {

        const match = matchSelect.value;
        const stand = standSelect.value;
        const quantity = Number(quantityInput.value);

        const price = ticketPrices[match]?.[stand] || 0;

        const validQuantity =
            Number.isInteger(quantity) &&
            quantity >= 1 &&
            quantity <= 10;

        const total = validQuantity ? price * quantity : 0;

        summaryMatch.textContent = match || "Not Selected";

        summaryStand.textContent = stand || "Not Selected";

        summaryQuantity.textContent =
            validQuantity ? quantity : "Invalid Quantity";

        summaryPrice.textContent =
            "₹" + price.toLocaleString("en-IN");

        totalPrice.textContent =
            "₹" + total.toLocaleString("en-IN");
    }

    // Live update events
    matchSelect.addEventListener("change", updateSummary);

    standSelect.addEventListener("change", updateSummary);

    quantityInput.addEventListener("input", updateSummary);

    // Initial summary
    updateSummary();
}
