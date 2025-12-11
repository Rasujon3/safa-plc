// Initialize EmailJS
(function() {
    emailjs.init("-EXODq1Njot9ZXPjJ"); // Replace with your EmailJS Public Key
})();

// Form Submit
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact_form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop normal form submit

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            subject: form.subject.value,
            message: form.message.value
        };

        // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        emailjs.send("service_jf7vezl", "template_dth2kdc", formData)
            .then(function(response) {
                alert("Message Sent Successfully!");
                form.reset();
            }, function(error) {
                alert("Failed to send message. Try again!");
                console.log("EmailJS Error:", error);
            });
    });
});
