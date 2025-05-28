const navbarContainer = document.getElementById('navbar-container');

// Essa função será usada para renderizar a barra de navegação, já que várias telas utilizam ela
// Assim não tem necessidade de criar uma barra de navegação para cada tela e repetir o código
function renderNavbar() {
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <img width="37" height="37" src='../assets/images/logo-fungo-roxo.png'alt="Logo da Pets Perdidos com o desenho de um gato e um cachorro.">
            <ul>
                <li><a href="./home.html">Início</a></li>
                <li><a href="./pages/criar-anuncio.html">Criar anúncio</a></li>
                <li><a href="./pages/meus-anuncios.html">Meus anúncios</a></li>
            </ul>
        </nav>
    `;
}
renderNavbar();