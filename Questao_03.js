function mostrarNotas(nome, nota1, nota2) {
    var nota1Ponderada = nota1 * 0.6;
    var nota2Ponderada = nota2 * 0.4;
    var notaTotal = nota1Ponderada + nota2Ponderada;
    alert("Nome do Aluno: " + nome + "\nNota 1: " + nota1 + "\nNota 2: " + nota2);
    alert("Nota Total de " + nome + ": " + notaTotal.toFixed(2));
}

var aluno1 = {
    nome: "João da Silva",
    nota1: 7,
    nota2: 8.5
};

mostrarNotas(aluno1.nome, aluno1.nota1, aluno1.nota2);

