function adicionarTarefa() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    
    if (titulo && descricao) {
        const tarefaCard = document.createElement("div");
        tarefaCard.className = "tarefa-card";
        tarefaCard.innerHTML = `
            <h2>${titulo}</h2>
            <p>Descrição: ${descricao}</p>
            <p>Status: <span class="status">Pendente</span></p>
            <button onclick="concluirTarefa(this)">Concluir</button>
            <button onclick="excluirTarefa(this)">Excluir</button>
        `;
        
        document.getElementById("tarefas").appendChild(tarefaCard);
        document.getElementById("titulo").value = "";
        document.getElementById("descricao").value = "";
    }
}

function concluirTarefa(button) {
    const status = button.parentNode.querySelector(".status");
    status.textContent = "Concluída";
    button.disabled = true;
}

function excluirTarefa(button) {
    button.parentNode.remove();
}
