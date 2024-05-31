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
        duration: 200, 
        easing: 'easeInOutQuad' 
    });

    animation
        .add({
            opacity: [0.9, 1],
            scale: [0.9, 1],
            begin: function () {
                pageToShow.style.display = 'block';
            }
        });

    animation.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navleft = document.getElementById("navleft");

    function showMenu() {
        if (navleft.style.marginLeft === '-200px' || navleft.style.marginLeft === '') {
            navleft.style.marginLeft = '0';
        } else {
            navleft.style.marginLeft = '-200px';
        }
    }

    menuButton.addEventListener("click", function(event) {
        showMenu();
        event.stopPropagation(); // Impede que o clique propague para o document
    });

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = navleft.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuButton) {
            navleft.style.marginLeft = '-200px';
        }
    });
});
function adjustNavLeftMargin() {
    if (window.innerWidth >= 886) {
        document.getElementById('navleft').style.marginLeft = '-200px';
    }
}
window.onload = adjustNavLeftMargin;
window.onresize = adjustNavLeftMargin;