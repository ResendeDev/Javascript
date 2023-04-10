function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
   
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }else {
       console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let cont = 0;

// while (cont < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[cont];
//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;
//     // console.log(instrumento);

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     };
//     cont++;
// }

for (i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if(event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}