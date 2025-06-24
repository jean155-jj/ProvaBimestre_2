document.addEventListener('DOMContentLoaded', function() {
   const btnSim = document.getElementById('btnSim');
   const btnNao = document.getElementById('btnNao'); 
   const formOng = document.getElementById('formOng');
   const modal = document.getElementById('modalObrigado');
   const btnFechar = document.getElementById('btnFecharModal');

   window.cadastrar = function() {
    const ong ={
        nome: document.getElementById('nome').ariaValueMax,
        tipoAjuda: document.getElementById('tipoAjuda').value,
        titulo: document.getElementById('titulo').value,
        missao: document.getElementById('missao').value,
        cnpj: document.getElementById('registro').value,
        telefone: document.getElementById('telefone').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        descricao: document.getElementById('descricao').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        complemento: document.getElementById('complemento').value,
        email: document.getElementById('email').value
    }
   }
});