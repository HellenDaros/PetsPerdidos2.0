const bannerContainer = document.getElementById('banner-container');

function renderBannerComponent(){
    bannerContainer.innerHTML = `
     <div class="banner-content">
    <div class="banner-text">
      <h1>
        <span>A melhor forma de</span>
        <span>encontrar <strong class="texto-destaque">Pets Perdidos</strong></span>
      </h1>
      <h2 class="subtitulo">
        <span>Com Pets Perdidos você tem mais chances de encontrar</span>
        <span>seu pet que sumiu ou pode ajudar outros tutores!</span>
      </h2>
      <div class="banner-buttons">
        <button class="btn-primary">Perdi meu pet</button>
        <button class="btn-primary">Achei um pet</button>
        <button class="btn-secondary">Meus anúncios</button>
      </div>
    </div>


      <img
        class="banner-image"
        src="../assets/images/imagem-banner.png"
        alt="Ilustração de uma pessoa abraçando cachorro com coração acima"
        height="450"
      />

  </div>
    `
}
renderBannerComponent()