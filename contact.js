// AJAX Form Submission (Formspree) with disappearing messages
const form = document.querySelector("#contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      formMessage.textContent = "✅ Message sent successfully!";
      formMessage.style.color = "#4caf50"; // green
      form.reset();
    } else {
      formMessage.textContent = "❌ Failed to send message.";
      formMessage.style.color = "#ff5252"; // red
    }
  } catch (err) {
    formMessage.textContent = "❌ Failed to send message.";
    formMessage.style.color = "#ff5252"; // red
  }

  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});

