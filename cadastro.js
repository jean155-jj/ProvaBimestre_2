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
    };

    const lista = JSON.parse(sessionStorage.getItem('ongs')) || [];
    lista.push(ong);
    sessionStorage.setItem('ongs', JSON.stringify(lista));

    modal.style.display = 'block';
   };

   btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.href = 'visualizacao.html';
  });

  btnSim?.addEventListener('click', () => {
    formOng.style.display = 'block';
    window.scrollTo({ top: formOng.offsetTop, behavior: 'smooth' });
  });

  btnNao?.addEventListener('click', () => {
    window.location.href = 'visualizacao.html'
  })

});