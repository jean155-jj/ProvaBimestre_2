document.addEventListener('DOMContentLoaded', function () {
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

        const ongsFiltradas = ongs.filter(ong =>
            (ong.nome.toLowerCase().includes(termo) ||
                ong.cidade.toLowerCase().includes(termo) ||
                ong.estado.toLowerCase().includes(termo) ||
                (ong.descricao || '').toLowerCase().includes(termo) ||
                (ong.titulo || '').toLowerCase().includes(termo)) &&
            (tipoAjuda === '' || (ong.tipoAjuda || '').toLowerCase() === tipoAjuda)
        );

        if (ongsFiltradas.length === 0) {
            container.innerHTML = '<p class="no-ongs-message">Nenhuma ONG encontrada.</p>';
            return;
        }

        ongsFiltradas.forEach(ong => {
            const card = document.createElement("div");
            card.classList.add('ong-card');
            card.innerHTML = `
        <h3>${ong.titulo || '(Sem Título)'}</h3>
        <p><strong>Instituição:</strong> ${ong.nome}</p>
        <p><strong>Tipo:</strong> ${ong.tipoAjuda}</p>
        <p>${ong.cidade} - ${ong.estado}</p>
      `;
            card.onclick = () => exibirDetalhes(ong);
            container.appendChild(card);
        });
    }

    window.exibirDetalhes = function (ong) {
        conteudo.innerHTML = `
      <h2>${ong.nome}</h2>
      <p><strong>Título:</strong> ${ong.titulo || 'Não informado'}</p>
      <p><strong>Tipo de Ajuda:</strong> ${ong.tipoAjuda || 'Não informado'}</p>
      <p><strong>Missão:</strong> ${ong.missao || 'Não informada'}</p>
      <p><strong>CNPJ:</strong> ${ong.cnpj || 'Não informado'}</p>
      <p><strong>Telefone:</strong> ${ong.telefone || 'Não informado'}</p>
      <p><strong>Cidade:</strong> ${ong.cidade || 'Não informada'}</p>
      <p><strong>Estado:</strong> ${ong.estado || 'Não informado'}</p>
      <p><strong>CEP:</strong> ${ong.cep || 'Não informado'}</p>
      <p><strong>Rua:</strong> ${ong.rua || 'Não informada'}</p>
      <p><strong>Número:</strong> ${ong.numero || 'Não informado'}</p>
      <p><strong>Bairro:</strong> ${ong.bairro || 'Não informado'}</p>
      <p><strong>Complemento:</strong> ${ong.complemento || 'Não informado'}</p>
      <p><strong>E-mail:</strong> ${ong.email || 'Não informado'}</p>
      <p><strong>Descrição Detalhada:</strong> ${ong.descricao || 'Não informada'}</p>
    `;
        modal.style.display = "flex";
    };

    window.fecharModal = function () {
        modal.style.display = "none";
    };

    campoPesquisa.addEventListener("input", function () {
        loadONGs(this.value, filtroTipo.value);
    });

    filtroTipo.addEventListener("change", function () {
        loadONGs(campoPesquisa.value, this.value);
    });

    loadONGs();
});
