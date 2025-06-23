document.getElementById("form-anuncio").addEventListener("submit", function (event) {
  event.preventDefault(); 
  alert("Anúncio publicado com sucesso!");
  this.reset(); 
});
