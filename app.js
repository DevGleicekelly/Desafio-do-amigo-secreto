let amigos = [];

function adicionarAmigo() {
    "Ana, Maria ,Bruna,Joice";
    // Captura o valor do campo de entrada
    let campoEntrada = document.getElementById("Ana");
    let nome = campoEntrada.value;

    // Valida a entrada
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Atualiza o array de amigos
        amigos.push(nome);
        console.log(amigos); // Para verificar se o nome foi adicionado
        exibirAmigos();

        // Limpa o campo de entrada
        campoEntrada.value = "";
    }
}

function exibirAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById("Ana, Maria ,Bruna,Joice");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista <li>
        let item = document.createElement("li");
        item.textContent = amigos[i]; // Adicionar o nome do amigo ao <li>

        // Adicionar o <li> à lista
        lista.appendChild(item);
    }
}


