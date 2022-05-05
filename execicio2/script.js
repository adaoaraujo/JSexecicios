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
