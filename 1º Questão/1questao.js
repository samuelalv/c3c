    <script>
    let a,b,c,equilatero=0,isosceles=0,escaleno=0;

        a=parseFloat(prompt('Informe o Primeiro lado'));
        b=parseFloat(prompt('Informe o Segundo lado'));
        c=parseFloat(prompt('Informe o Terceiro lado'));
        if(a==b && b==c) {
            document.write(' O triangulo é Equilatero ');

        } else if(a==b || b==c || a==c) {
            document.write(' O triangulo é Isosceles ');

        } else { 
            document.write(' O triangulo é Escaleno ');

        }

    </script>