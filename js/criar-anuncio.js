const inputImagem = document.getElementById('imagem');
const previewArea = document.getElementById('imagem-preview-area');
const nomeArquivo = document.getElementById('nome-arquivo');
const imagemModal = document.getElementById('imagem-ampliada');
const uploadBox = document.getElementById('upload-box');

uploadBox.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
    inputImagem.click();
  }
});

inputImagem.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    nomeArquivo.textContent = file.name;

    const reader = new FileReader();
    reader.onload = function (e) {
      imagemModal.src = e.target.result;
      previewArea.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('btnVerImagem').addEventListener('click', function (e) {
  e.stopPropagation();
  document.getElementById('modalPreview').style.display = 'flex';
});

document.querySelector('.close-preview').addEventListener('click', function () {
  document.getElementById('modalPreview').style.display = 'none';
});

document.getElementById('btnRemoverImagem').addEventListener('click', function (e) {
  e.stopPropagation();
  inputImagem.value = '';
  imagemModal.src = '#';
  previewArea.style.display = 'none';
});

document.getElementById('btnSalvar').addEventListener('click', function () {
  const imagemBase64 = imagemModal.src;
  const imagemValida = imagemBase64 && imagemBase64 !== '#' ? imagemBase64 : null;

  const anuncio = {
    situacao: document.getElementById('situacao').value,
    especie: document.getElementById('especie').value,
    nome: document.getElementById('nome').value,
    raca: document.getElementById('raca').value,
    sexo: document.getElementById('sexo').value,
    cor: document.getElementById('cor').value,
    telefone: document.getElementById('telefone').value,
    localizacao: document.getElementById('localizacao').value,
    descricao: document.getElementById('descricao').value,
    imagem: imagemValida
  };

  if (!anuncio.situacao || !anuncio.especie || !anuncio.nome || !anuncio.telefone) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  let anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];
  anuncios.push(anuncio);
  localStorage.setItem('anuncios', JSON.stringify(anuncios));

  alert('Anúncio salvo com sucesso!');
  document.getElementById('form-anuncio').reset();
  previewArea.style.display = 'none';
  imagemModal.src = '#';
  window.location.href = "/pages/home.html";
});