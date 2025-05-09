const juices = [
    {
      name: "Tropical Twist",
      description: "Mango, Pineapple, and Passionfruit"
    },
    {
      name: "Sweet Greens",
      description: "Kale, Apple, Cucumber, and Lime"
    },
    {
      name: "Glow",
      description: "Blueberry, Strawberry, and Raspberry"
    }
  ];
  
  // Render juices on the page
  const container = document.querySelector('.juice-container');
  
  juices.forEach(juice => {
    const card = document.createElement('div');
    card.className = 'juice-card';
    card.innerHTML = `
      <h2>${juice.name}</h2>
      <p>${juice.description}</p>
    `;
    container.appendChild(card);
  });
  
  // Button click handler
  function orderNow() {
    alert('Thanks for choosing Jooced Fresh! Your order is being prepared. 🍹');
  }
