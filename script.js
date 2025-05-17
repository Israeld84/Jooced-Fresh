document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const confirmation = document.getElementById("orderConfirmation");

  // GSAP animations on page load
  gsap.from(".hero", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
  gsap.from(".juice-card", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 0.3,
    ease: "back.out(1.7)",
  });
  gsap.from("footer", { duration: 1.5, opacity: 0, y: 50, ease: "power1.out", delay: 0.5 });

  // Handle form submission with animation
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const juice = document.getElementById("juice").value;
    const quantity = document.getElementById("quantity").value;

    if (!name || !email || !juice || !quantity) {
      confirmation.textContent = "Please complete all fields.";
      confirmation.style.color = "red";
      gsap.fromTo(confirmation, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "bounce.out" });
      return;
    }

    confirmation.style.color = "#2f9e44";
    confirmation.textContent = `Thanks ${name}, your order of ${quantity} ${juice} juice${quantity > 1 ? "s" : ""} has been received!`;

    // Animate confirmation text
    gsap.fromTo(
      confirmation,
      { opacity: 0, y: -10, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.75)" }
    );

    // Scroll to confirmation
    confirmation.scrollIntoView({ behavior: "smooth" });

    // Reset form after animation
    orderForm.reset();
  });
});
