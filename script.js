const service = document.getElementById("service");
const homeService = document.getElementById("homeService");
const total = document.getElementById("total");
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const rapidoLabel = document.getElementById("rapidoLabel");
const rapidoCharge = document.getElementById("rapidoCharge");

function calculatePrice() {
    let price = parseInt(service.value);

    // Bride package: home service included
    if(service.value == "4000"){
        homeService.checked = true;
        homeService.disabled = true;
        rapidoLabel.style.display = "none";
        rapidoCharge.value = "";
    } 
    else {
        homeService.disabled = false;
    }

    // Add rapido charge if home service selected
    if(homeService.checked && service.value != "4000"){
        rapidoLabel.style.display = "block";
        if(rapidoCharge.value != ""){
            price = price + parseInt(rapidoCharge.value);
        }
    } 
    else {
        rapidoLabel.style.display = "none";
        rapidoCharge.value = "";
    }

    total.innerText = price;
}

// events
service.addEventListener("change", calculatePrice);
homeService.addEventListener("change", calculatePrice);
rapidoCharge.addEventListener("input", calculatePrice);

// default calculation on page load
calculatePrice();

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const serviceText = service.options[service.selectedIndex].text;
    const price = total.innerText;

    const phoneNumber = "918919099361"; // change to your sister number

    const msg =
`Hello, I want to book a nail session 💅

Name: ${name}
Date: ${date}
Time: ${time}
Service: ${serviceText}
Total Price: ₹${price}`;

    const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(msg);

    window.open(url, "_blank");

    message.innerText = "✅ Booking sent to WhatsApp successfully!";
});