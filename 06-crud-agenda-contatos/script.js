const inserirBtn = document.getElementById('inserirBtn');
const tabela = document.getElementById('tabela-contatos').querySelector('tbody');


function criarBotao(texto, classe, acao) {
    const btn = document.createElement('button');
    btn.innerText = texto;
    btn.className = `acao-btn ${classe}`;
    btn.onclick = acao;
    return btn;
}

function definirAcoesPadrao(row) {
    const acoesCell = row.cells[3];
    acoesCell.innerHTML = '';

    acoesCell.appendChild(criarBotao('Editar', 'editar', () => editarLinha(row)));
    acoesCell.appendChild(criarBotao('Excluir', 'excluir', () => excluirLinha(row)));
}

inserirBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');

    if (!nome.checkValidity()) return nome.reportValidity();
    if (!telefone.checkValidity()) return telefone.reportValidity();
    if (!email.checkValidity()) return email.reportValidity();

    adicionarLinha(nome.value.trim(), telefone.value.trim(), email.value.trim());

    nome.value = telefone.value = email.value = '';
});


function adicionarLinha(nome, telefone, email) {
    const row = tabela.insertRow();

    row.insertCell(0).innerText = nome;
    row.insertCell(1).innerText = telefone;
    row.insertCell(2).innerText = email;
    row.insertCell(3);

    definirAcoesPadrao(row);
}


function editarLinha(row) {
    const [nome, telefone, email] = [
        row.cells[0].innerText,
        row.cells[1].innerText,
        row.cells[2].innerText
    ];

    row.cells[0].innerHTML = `<input type="text" required value="${nome}">`;
    row.cells[1].innerHTML = `<input type="tel" required pattern="\\d{8,11}" title="Digite apenas números, mínimo 8 e máximo 11" value="${telefone}">`;
    row.cells[2].innerHTML = `<input type="email" required value="${email}">`;

    const acoesCell = row.cells[3];
    acoesCell.innerHTML = '';

    acoesCell.appendChild(criarBotao('Salvar', 'salvar', () => salvarEdicao(row)));
    acoesCell.appendChild(criarBotao('Cancelar', 'cancelar', () => cancelarEdicao(row, nome, telefone, email)));
}

function salvarEdicao(row) {
    const nomeInput = row.cells[0].querySelector('input');
    const telefoneInput = row.cells[1].querySelector('input');
    const emailInput = row.cells[2].querySelector('input');

    if (!nomeInput.checkValidity()) return nomeInput.reportValidity();
    if (!telefoneInput.checkValidity()) return telefoneInput.reportValidity();
    if (!emailInput.checkValidity()) return emailInput.reportValidity();

    row.cells[0].innerText = nomeInput.value.trim();
    row.cells[1].innerText = telefoneInput.value.trim();
    row.cells[2].innerText = emailInput.value.trim();

    definirAcoesPadrao(row);
}

function cancelarEdicao(row, nome, telefone, email) {
    row.cells[0].innerText = nome;
    row.cells[1].innerText = telefone;
    row.cells[2].innerText = email;

    definirAcoesPadrao(row);
}

function excluirLinha(row) {
    if (confirm('Deseja realmente excluir este contato?')) {
        row.remove();
    }
}
