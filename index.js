
// script.js
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  document.getElementById("formMessage").textContent = "Thank you, " + name + "! Your message has been received.";

  this.reset();
});
