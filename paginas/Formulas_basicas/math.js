const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group('triangulo')


const ladotringulo1 = 6;
const ladotringulo2 = 6;
const ladotringuloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladotringulo1 + ladotringulo2 + ladotringuloBase;

const areaTriangulo = (ladotringuloBase * alturaTriangulo) / 2;

function calcularTriangulo (lado1 , lado2 , base , altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2 ,
    }
}

function calcularAlturaTriangulo(lado1 , base){
    if (lado1 == base){
        console.warn ('Este no es un triangulo isosceles');
    }else{
        return Math.sqrt((lado1**2) - ((base**2)/4));

    }
}
function calcularAlturaTrianguloEscaleno (lado1 , lado2 , lado3){
    const S = (lado1 + lado2 + lado3);

    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.warn('no es un triangulo escaleno');
    }else{
        return 2/lado1 * (Math.sqrt(S * (S-lado1)*(S-lado2)*(S-lado3)));
    }
}



function calcularCuadrado (lado ) {
    return {
        perimetro: lado * 4 ,
        area: lado * lado ,
    }
}


console.groupEnd('triangulo')


console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
    perimetroTriangulo,
    areaTriangulo,
});

console.group('circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const pi = 3.1415;

const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo ** 2)*pi;

console.log({
    radioCirculo,
    diametroCirculo,
    perimetroCirculo,
    areaCirculo,
})

function calcularCirculo (radio){

    const diametro = radio * 2;
    const radioCuadrado = radio ** 2;

    return {
        circunferencia: diametro * Math.PI,
        area: radioCuadrado * Math.PI
    }
}
console.groupEnd('circulo')