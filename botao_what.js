const boasVindas = document.querySelector("#boas_vindas");
const flutuante = document.querySelector(".flutuante");

window.addEventListener("scroll", () => {
  const ponto = boasVindas.offsetHeight - 600; // aparece 600px antes do fim

  if (window.scrollY > ponto) {
    flutuante.classList.add("mostrar");
  } else {
    flutuante.classList.remove("mostrar");
  }
});