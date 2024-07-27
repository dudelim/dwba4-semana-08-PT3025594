class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome;
    }
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    situacao() {
        return this.media() > 6 ? 'Aprovado' : 'Reprovado';
    }
}

const alunos = [
    new Aluno('Fernanda', 'Lopes', 7, 8.5),
    new Aluno('Maria', 'Oliveira', 6, 9),
    new Aluno('Valentina', 'Prado', 8, 7.5),

];

function mostrarDadosAlunos(alunos) {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}
mostrarDadosAlunos(alunos.slice(0, 3));
