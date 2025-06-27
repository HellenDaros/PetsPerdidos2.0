const pets = [
    {
      name: "Bob",
      status: "Perdido",
      image: "https://placekitten.com/80/80",
    },
    {
      name: "Sem identificação",
      status: "Encontrado",
      image: "https://placedog.net/81/80",
    },
    {
      name: "Mimi",
      status: "Perdido",
      image: "https://placekitten.com/82/80",
    },
    {
      name: "Mila",
      status: "Encontrado",
      image: "https://placedog.net/83/80",
    },
    {
      name: "Dora",
      status: "Perdido",
      image: "https://placedog.net/84/80",
    },
  ];
  
  const container = document.getElementById("announcements");
  
  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}" class="avatar" />
      <div class="info">
        <div class="name">${pet.name}</div>
        <div class="status">
          <span class="dot"></span>
          <span class="status-text">${pet.status}</span>
        </div>
      </div>
      <a href="#" class="link">Ver Mais</a>
    `;
    container.appendChild(card);
  });

  
  