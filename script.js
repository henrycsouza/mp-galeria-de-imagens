// Seleção de elementos
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

// 1. Navegação entre Seções
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    irParaSeção(targetId);
  });
});

function irParaSeção(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  
  // Scroll para o topo ao mudar de aba
  window.scrollTo(0, 0);
}

// 2. Carregar Mais Imagens (Manipulação do DOM)
function carregarMais() {
  const galeria = document.getElementById("galeria");
  
  for (let i = 0; i < 4; i++) {
    const randomId = Math.floor(Math.random() * 1000);
    const img = document.createElement("img");
    
    img.src = `https://picsum.photos/400/400?random=${randomId}`;
    img.classList.add("foto-item");
    
    // Adiciona o evento de clique para o modal na nova imagem
    img.onclick = function() { abrirModal(this.src); };
    
    galeria.appendChild(img);
  }
}

// 3. Modal (Desafio Extra)
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");

function abrirModal(src) {
  modal.style.display = "flex";
  imgModal.src = src;
}

function fecharModal() {
  modal.style.display = "none";
}