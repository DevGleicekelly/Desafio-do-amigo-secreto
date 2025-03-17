let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let campoEntrada = document.getElementById("nomeAmigo");
    let nome = campoEntrada.value;

    // Valida a entrada
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Atualiza o array de amigos
        amigos.push(nome);
        console.log(amigos); // Para verificar se o nome foi adicionado

        // Limpa o campo de entrada
        campoEntrada.value = "";
    }
}


