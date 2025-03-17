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
        exibirAmigos();

        // Limpa o campo de entrada
        campoEntrada.value = "";
    }
}

function exibirAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");

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
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
 // Gerar um índice aleatório
 let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  // Obter o nome sorteado
  let amigoSorteado = amigos[indiceAleatorio];
   // Mostrar o resultado
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;}
