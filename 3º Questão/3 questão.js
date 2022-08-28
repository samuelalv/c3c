   <script>
        nota=parseFloat(prompt('Informe a nota do aluno'));
        passaAluno(nota);
        
function passaAluno(nota) {
    const notaRecebida = arredondar(nota);
    if (notaRecebida < 40) {
        document.write('Aluno foi reprovado com nota inferior a 40');
    } else {
        document.write('Aluno foi aprovado com nota satisfatória');
    }
}

function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5))
    } else {
        return nota = nota - (nota % 5)
    }
}
    </script>