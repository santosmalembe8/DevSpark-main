// ELEMENTOS
const toggle = document.querySelector('.menu');// botão do menu
const menuLista = document.querySelector('.nav_lista'); // lista do menu
const botaoMenu = document.querySelector('.botao_menu'); // div do botão

// Abrir / fechar menu
toggle.addEventListener('click', () => {
    menuLista.classList.toggle('show');  // mostra/esconde menu
    botaoMenu.classList.toggle('ativo'); // muda ícone
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    const clicouNoMenu = menuLista.contains(e.target);
    const clicouNoBotao = toggle.contains(e.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        menuLista.classList.remove('show');
        botaoMenu.classList.remove('ativo');
    }
});



  


