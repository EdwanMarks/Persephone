AOS.init()

document.addEventListener("click", function() {
    var audio = document.querySelector("audio");
    audio.play();
  });

// Adiciona outro evento ao documento
document.addEventListener("beforeunload", function() {
    var audio = document.querySelector("audio");
    audio.pause();
  });

  