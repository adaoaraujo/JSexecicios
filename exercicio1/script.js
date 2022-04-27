const enviar = document.querySelector('.enviar');

enviar.addEventListener('click', function(event){
    alertaADAO();
});

function alertaADAO(){
    alert('Função criada em um ficheiro externo que mostra uma mensagem');  
};