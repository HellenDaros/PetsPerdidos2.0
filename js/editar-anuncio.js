const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];

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

// Carregar dados
if (index !== null && anuncios[index]) {
  const anuncio = anuncios[index];
  document.getElementById('situacao').value = anuncio.situacao;
  document.getElementById('especie').value = anuncio.especie;
  document.getElementById('nome').value = anuncio.nome;
  document.getElementById('raca').value = anuncio.raca;
  document.getElementById('sexo').value = anuncio.sexo;
  document.getElementById('cor').value = anuncio.cor;
  document.getElementById('telefone').value = anuncio.telefone;
  document.getElementById('localizacao').value = anuncio.localizacao;
  document.getElementById('descricao').value = anuncio.descricao;
  if (anuncio.imagem) {
    imagemModal.src = anuncio.imagem;
    nomeArquivo.textContent = "imagem.jpg";
    previewArea.style.display = 'block';
  }
}

document.getElementById('btnSalvar').addEventListener('click', function () {
  const imagemBase64 = imagemModal.src;
  const imagemValida = imagemBase64 && imagemBase64 !== '#' ? imagemBase64 : null;
  const anuncioAtualizado = {
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

  if (!anuncioAtualizado.situacao || !anuncioAtualizado.especie || !anuncioAtualizado.nome || !anuncioAtualizado.telefone) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  anuncios[index] = anuncioAtualizado;
  localStorage.setItem('anuncios', JSON.stringify(anuncios));
  alert("Anúncio atualizado com sucesso!");
  window.location.href = "/pages/home.html";
});

document.getElementById('btnExcluir').addEventListener('click', function () {
  if (confirm("Tem certeza que deseja excluir este anúncio?")) {
    anuncios.splice(index, 1);
    localStorage.setItem('anuncios', JSON.stringify(anuncios));
    alert("Anúncio excluído com sucesso.");
    window.location.href = "/pages/home.html";
  }
});
