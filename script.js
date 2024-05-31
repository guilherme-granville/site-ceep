function showContent(id) {
    document.getElementById('ads').style.display = 'none';
    document.getElementById('quimica').style.display = 'none';
    document.getElementById('vestuario').style.display = 'none';
    document.getElementById('farmacia').style.display = 'none';
    document.getElementById('agronegocio').style.display = 'none';
    document.getElementById('seguranca').style.display = 'none';
    document.getElementById('rh').style.display = 'none';
    document.getElementById(id).style.display = 'block';
    const pageToShow = document.getElementById(id);

    // Cria a animação
    let animation = anime.timeline({
        targets: pageToShow,
        duration: 200, // Duração da animação em milissegundos
        easing: 'easeInOutQuad' // Função de suavização
    });

    // Adiciona animações à timeline
    animation
        .add({
            opacity: [0.9, 1], // Transição da opacidade de 0 para 1
            scale: [0.9, 1], // Transição do tamanho de 0.5 para 1
            begin: function () {
                pageToShow.style.display = 'block'; // Mostra o formulário no início da animação
            }
        });

    // Inicia a animação
    animation.play();
}

function showMenu() {
    let boolean
    if (document.getElementById('navleft').style.marginLeft == '-200px') {
    document.getElementById('navleft').style.marginLeft = '0';
    boolean = false;
    } else {
    document.getElementById('navleft').style.marginLeft = '-200px';
    boolean = true;
    }
}

function adjustNavLeftMargin() {
    if (window.innerWidth >= 886) {
        document.getElementById('navleft').style.marginLeft = '-200px';
    }
}
window.onload = adjustNavLeftMargin;
window.onresize = adjustNavLeftMargin;