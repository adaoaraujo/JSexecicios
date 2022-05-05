/*Crie um botão em um ficheiro html, que ao ser clicado aparece
um número aleatório entre 0 e 50
*/
const enviar = document.querySelector('.enviar');
   var h2    = document.querySelector('.texto' );
enviar.addEventListener('click', function(event){
    var texto = gerarNumeroaletorio();
    h2.innerHTML = texto;
});

function gerarNumeroaletorio(){
        const max = 1000;
        const min = 0;
        return Math.floor(Math.random() * (max - min)) + min;   
}
/**
 * Exercício 2.1
Crie um botão em um ficheiro html, que ao ser clicado abre
uma janela nova com o site: http://www.imdb.com
 */

const enviarr = document.querySelector('.enviarr');
   var h2    = document.querySelector('.texto' );
enviarr.addEventListener('click', function(event){
    window.open("http://www.imdb.com","_blank");
});
