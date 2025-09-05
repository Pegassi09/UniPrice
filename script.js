const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const select = document.getElementById("selecao");
const valor = document.getElementById("valor");
const imgCurso = document.getElementById("curso-imagem");
const descontoContainer = document.getElementById("desconto-container");
const descontoInput = document.getElementById("desconto");
const aplicarBtn = document.getElementById("aplicar-desconto");

let precoAtual = null;

const precos = {
  1: 12203.06, 2: 2390.20, 3: 1816.55, 4: 1434.13,
  5: 1042.83, 6: 1577.53, 7: 956.07, 8: 1266.81,
  9: 2355.79, 10: 1766.83, 11: 725.03, 12: 928.20,
  13: 956.07, 14: 1075.60, 15: 1195.09, 16: 928.20,
  17: null, 18: 1766.83
};

const imagens = {
  1: "images/Medicina.jpg", 
  2: "images/ODONTO.jpg", 
  3: "images/biomed.jpg", 
  4: "images/enfermagem.jpg",
  5: "images/FISIO.jpeg", 
  6: "images/psico.jpeg", 
  7: "images/edfisica.jpeg", 
  8: "images/nutri.jpg",
  9: "images/medvet.jpeg", 
  10: "images/engcivil.jpg", 
  11: "images/ads.jpg", 
  12: "images/ccomp.jpg",
  13: "images/adm.jpg", 
  14: "images/direito.jpg", 
  15: "images/publieprop.jpeg", 
  16: "images/intartificial.jpg",
  17: "images/ciberseguranca.jpg", 
  18: "images/ENGmecanica.jpg"
};

select.addEventListener("change", () => {
  const cursoSelecionado = select.value;
  if (cursoSelecionado && precos[cursoSelecionado] !== undefined) {
    precoAtual = precos[cursoSelecionado];
    if (precoAtual !== null) {
      valor.textContent = `Mensalidade: R$ ${precoAtual.toFixed(2)} / mês`;
      descontoContainer.style.display = "block";
    } else {
      valor.textContent = "Valor não divulgado no momento.";
      descontoContainer.style.display = "none";
    }

    if (imagens[cursoSelecionado]) {
      imgCurso.src = imagens[cursoSelecionado];
      imgCurso.style.display = "block";
    } else {
      imgCurso.style.display = "none";
    }
  } else {
    valor.textContent = "Selecione um curso para ver o valor.";
    imgCurso.style.display = "none";
    descontoContainer.style.display = "none";
  }
});

aplicarBtn.addEventListener("click", () => {
  const desconto = parseFloat(descontoInput.value);
  if (!isNaN(desconto) && desconto > 0 && desconto < 100 && precoAtual) {
    const precoFinal = precoAtual - (precoAtual * (desconto / 100));
    valor.textContent = `Mensalidade com desconto: R$ ${precoFinal.toFixed(2)} / mês`;
  }
});

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

const contactBtn = document.getElementById("contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-modal");

contactBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});
