// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessage = document.querySelector(".form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    formMessage.textContent = "Sending... ⏳";
    formMessage.style.color = "#999";

    emailjs
      .sendForm(
        "service_6x88a4b",   // 👈 replace with your EmailJS Service ID
        "template_6k1mpsp",  // 👈 replace with your EmailJS Template ID
        this
      )
      .then(() => {
        formMessage.textContent = "Message sent successfully ✅";
        formMessage.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        formMessage.textContent = "Failed to send ❌ " + error.text;
        formMessage.style.color = "red";
      });
  });
});















