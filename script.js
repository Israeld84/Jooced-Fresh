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

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      confirmation.textContent = "Please complete all required fields.";
      confirmation.style.color = "red";
      gsap.fromTo(confirmation, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "bounce.out" });
      return;
    }

    // Collect selected juices and quantities
    const juiceOptions = [...orderForm.querySelectorAll(".juice-option")];
    const selectedJuices = [];

    for (const option of juiceOptions) {
      const checkbox = option.querySelector('input[type="checkbox"]');
      const qtyInput = option.querySelector('input[type="number"]');
      if (checkbox.checked) {
        const qty = parseInt(qtyInput.value);
        if (qty > 0) {
          selectedJuices.push({ name: checkbox.value, quantity: qty });
        }
      }
    }

    if (selectedJuices.length === 0) {
      confirmation.textContent = "Please select at least one juice and specify quantity.";
      confirmation.style.color = "red";
      gsap.fromTo(confirmation, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "bounce.out" });
      return;
    }

    // Build order summary text
    const orderSummary = selectedJuices
      .map(j => `${j.quantity} x ${j.name}`)
      .join(", ");

    confirmation.style.color = "#2f9e44";
    confirmation.textContent = `Thanks ${name}, your order of ${orderSummary} has been received!`;

    // Animate confirmation text
    gsap.fromTo(
      confirmation,
      { opacity: 0, y: -10, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.75)" }
    );

    confirmation.scrollIntoView({ behavior: "smooth" });

    // After 2 seconds, redirect to Square site
    setTimeout(() => {
      const paymentUrl = "https://jooced.square.site";
      // Optional: append order info as URL params (if useful)
      const params = new URLSearchParams();
      params.append("name", name);
      params.append("email", email);
      params.append("order", orderSummary);

      window.location.href = paymentUrl + "?" + params.toString();
    }, 2000);

    // Reset form immediately (optional)
    orderForm.reset();
  });
});
