function calcularCompatibilidade() {
    var nome1 = document.getElementById('nome1').value;
    var nome2 = document.getElementById('nome2').value;

    // Verifica se os dois nomes foram preenchidos
    if (nome1 === "" || nome2 === "") {
        document.getElementById('resultado').innerHTML = "Por favor, insira os dois nomes.";
        return;
    }

    // Gera uma porcentagem aleatória entre 0 e 100
    var porcentagem = Math.floor(Math.random() * 101);

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = nome1 + " e " + nome2 + " têm " + porcentagem + "% de chance de ficarem juntos!";
}