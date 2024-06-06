document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".dropbtn");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
});

function showContent(id) {
    const contents = ['ads', 'quimica', 'vestuario', 'farmacia', 'agronegocio', 'seguranca', 'rh'];
    contents.forEach(content => {
        document.getElementById(content).style.display = 'none';
    });
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
function showLab(id) {
    const labs = ['anfiteatro', 'biblioteca', 'labs-quimica', 'labs-vestuario', 'lab-fisica', 'lab-biologia', 'lab-matematica', 'sala-informatica'];
    labs.forEach(content => {
        document.getElementById(content).style.display = 'none';
    });
    const labToShow = document.getElementById(id);

    // Cria a animação
    let animation = anime.timeline({
        targets: labToShow,
        duration: 200, 
        easing: 'easeInOutQuad' 
    });

    animation
        .add({
            opacity: [0.9, 1],
            scale: [0.9, 1],
            begin: function () {
                labToShow.style.display = 'block';
            }
        });

    animation.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navleft = document.getElementById("navleft");

    function showMenu() {
        if (navleft.style.marginLeft === '-250px' || navleft.style.marginLeft === '') {
            navleft.style.marginLeft = '0';
        } else {
            navleft.style.marginLeft = '-250px';
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
            navleft.style.marginLeft = '-250px';
        }
    });
});
function adjustNavLeftMargin() {
    if (window.innerWidth >= 886) {
        document.getElementById('navleft').style.marginLeft = '-250px';
    }
}
window.onload = adjustNavLeftMargin;
window.onresize = adjustNavLeftMargin;


//########################### transição do carrossel de imagens #########################################
var indiceAtual = 0;
mostrarImagem(indiceAtual); // Mostra a primeira imagem

function mover(n) {
  mostrarImagem(indiceAtual += n);
}

function mostrarImagem(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem2(indiceAtual); // Mostra a primeira imagem

function mover2(n) {
  mostrarImagem2(indiceAtual += n);
}

function mostrarImagem2(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem2");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem3(indiceAtual); // Mostra a primeira imagem

function mover3(n) {
  mostrarImagem3(indiceAtual += n);
}

function mostrarImagem3(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem3");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem4(indiceAtual); // Mostra a primeira imagem

function mover4(n) {
  mostrarImagem4(indiceAtual += n);
}

function mostrarImagem4(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem4");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem5(indiceAtual); // Mostra a primeira imagem

function mover5(n) {
  mostrarImagem5(indiceAtual += n);
}

function mostrarImagem5(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem5");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem6(indiceAtual); // Mostra a primeira imagem

function mover6(n) {
  mostrarImagem6(indiceAtual += n);
}

function mostrarImagem6(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem6");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem7(indiceAtual); // Mostra a primeira imagem

function mover7(n) {
  mostrarImagem7(indiceAtual += n);
}

function mostrarImagem7(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem7");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
//transição do carrossel de imagens
var indiceAtual = 0;
mostrarImagem8(indiceAtual); // Mostra a primeira imagem

function mover8(n) {
  mostrarImagem8(indiceAtual += n);
}

function mostrarImagem8(n) {
  var i;
  var imagens = document.getElementsByClassName("carrossel-imagem8");
  if (n > imagens.length - 1) {indiceAtual = 0}
  if (n < 0) {indiceAtual = imagens.length - 1}
  for (i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[indiceAtual].style.display = "block";
}
