document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let serviceSelect = document.getElementById("service");
    let service = serviceSelect.options[serviceSelect.selectedIndex].text;

    let total = document.getElementById("total").innerText;

    let msg =
`Nail Booking 💅
Name: ${name}
Date: ${date}
Time: ${time}
Service: ${service}
Total: ₹${total}`;

    let whatsappNumber = "919121809288"; // PUT YOUR SISTER NUMBER

    let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(msg);

    window.location.href = url;   // <-- this opens WhatsApp
});