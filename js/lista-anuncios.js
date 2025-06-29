const container = document.getElementById("announcements");
const modal = document.getElementById("modal-anuncio");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close");

// Limpa container antes de listar
container.innerHTML = "";

// Pega os anúncios do localStorage
const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];

anuncios.forEach((anuncio, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${anuncio.imagem || 'https://via.placeholder.com/80?text=Sem+Imagem'}" alt="${anuncio.nome}" class="avatar" />
    <div class="info">
      <div class="name">${anuncio.nome}</div>
      <div class="status">
        <span class="dot"></span>
        <span class="status-text">${anuncio.situacao}</span>
      </div>
    </div>
    <a href="#" class="link" data-index="${index}">Ver Mais</a>
  `;
  container.appendChild(card);
});

// Ao clicar em Ver Mais
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    e.preventDefault();
    const index = e.target.getAttribute("data-index");
    const anuncio = anuncios[index];

    modalBody.innerHTML = `
    <img src="${anuncio.imagem || 'https://via.placeholder.com/120?text=Pet'}" alt="${anuncio.nome}" />
    <h3>Você me viu por aí?</h3>
    <div class="status-badge">
      <div class="dot"></div>
      <span>${anuncio.situacao}</span>
    </div>
    <div class="modal-fields">
      <input disabled value="Nome do pet: ${anuncio.nome}" />
      <input disabled value="Espécie: ${anuncio.especie}" />
      <input disabled value="Sexo: ${anuncio.sexo}" />
      <input disabled value="Raça: ${anuncio.raca || 'Não informada'}" />
      <input disabled value="Cor: ${anuncio.cor || 'Não informada'}" />
      <input disabled value="Telefone: ${anuncio.telefone}" />
      <input disabled value="Última localização: ${anuncio.localizacao || '-'}" />
      <textarea disabled>${anuncio.descricao || 'Sem descrição informada.'}</textarea>
    </div>
    <a href="/pages/editar-anuncio.html?index=${index}" class="btn-edit">✏️ Editar Anúncio</a>
  `;
  
  

    modal.style.display = "flex";
  }
});

// Fecha modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Fecha modal ao clicar fora
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
