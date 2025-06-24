document.addEventListener('DOMContentLoaded', function (){
    const container = document.getElementById("listaONGs");
    const modal = document.getElementById("detalhesONG");
    const conteudo = document.getElementById("conteudoONG");
    const campoPesquisa = document.getElementById("pesquisaONG");
    const filtroTipo = document.getElementById("filtroTipo");

    function loadONGs(filtro = '', tipo = '') {
        const ongs = JSON.parse(sessionStorage.getItem("ongs")) || [];
        container.innerHTML = '';

        const termo = filtro.toLowerCase();
        const tipoAjuda = tipo.toLowerCase();
    }
})