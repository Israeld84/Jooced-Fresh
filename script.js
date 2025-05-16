document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const confirmation = document.getElementById("orderConfirmation");

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const juice = document.getElementById("juice").value;
    const quantity = document.getElementById("quantity").value;

    if (!name || !email || !juice || !quantity) {
      confirmation.textContent = "Please complete all fields.";
      confirmation.style.color = "red";
      return;
    }

    confirmation.style.color = "#2f9e44";
    confirmation.textContent = `Thanks ${name}, your order of ${quantity} ${juice} juice${quantity > 1 ? "s" : ""} has been received!`;

    orderForm.reset();
  });
});
