const navbarContainer = document.getElementById('navbar-container');

// Essa função será usada para renderizar a barra de navegação, já que várias telas utilizam ela
// Assim não tem necessidade de criar uma barra de navegação para cada tela e repetir o código
function renderNavbar() {
  navbarContainer.innerHTML = `
    <header>
      <div class="logo">
        <img src="/assets/images/logo-fungo-roxo.png" alt="Logo Pets Perdidos" class="logo-pet" />
        <span>Pets Perdidos</span>
      </div>
      <nav>
        <a href="/pages/home.html">Home</a>
        <a href="/pages/anuncio.html">Criar anúncio</a>
        <a href="/pages/login.html" title="Sair" class="logout-icon">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </nav>
    </header>
  `;
}




renderNavbar();

