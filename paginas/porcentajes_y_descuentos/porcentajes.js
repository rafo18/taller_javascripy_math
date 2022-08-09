const inputPrice = document.querySelector('#precio');
const inputDiscount = document.querySelector('#porcentaje');
const btn = document.querySelector('.calcular');
const pResult = document.querySelector('.total');
const pCupon = document.querySelector('.pCupon')
const inputCupon = document.querySelector('#cupon');


btn.addEventListener('click' , calcularPrecioConDescuento);

const cuponesObj = []

cuponesObj.push({
    nombre: 'rafo' , 
    discount: 80,
});

cuponesObj.push({
    nombre: 'cristiano' , 
    discount: 50,
});

cuponesObj.push({
    nombre: 'messi' , 
    discount: 25,
});
    


function calcularPrecioConDescuento () {

    const price = Number(inputPrice.value);
    const cupon = inputCupon.value;
    let descuento;

    function metodo(cuponMetodo){
        return cuponMetodo.nombre == cupon;
    }
    const cuponObj = cuponesObj.find(metodo);
    console.log(cuponObj);
    

    if(cuponObj){
        descuento = cuponObj.discount;
        const newPrice = (price*(100-descuento))/100;
        pResult.innerText = 'El precio que tiene q pagar es: $' + newPrice;

    }else{
        pResult.innerText = 'El cupon no es valido';
    }
    
   
}


 /*if (cupon == "platziton"){
        pCupon.innerText = 'tiene un cupon del 50% de descuento'

        const newPrice = (price*(100-50))/100;

        pResult.innerText = 'El precio que tiene q pagar es: $' + newPrice;
    } else if (cupon == "holaa"){
        pCupon.innerText = 'tiene un cupon del 10%'

        const newPrice = (price*(100-10))/100;

        pResult.innerText = 'El precio que tiene q pagar es: $' + newPrice;
    }else if (cupon == "rb"){
        pCupon.innerText = 'tiene un cupon del 25%'

        const newPrice = (price*(100-25))/100;

        pResult.innerText = 'El precio que tiene q pagar es: $' + newPrice;
    }else {
        pResult.innerText = 'El cupon no es valido';
    }*/

/* if(!price || !discount){
        pResult.innerText = 'por favor llena el formulario';
        return;
    }else if(discount > 100){

        pResult.innerText = 'ingresa un valor hasta 100%';
        return;
    }else{

        const newPrice = (price*(100-discount))/100;
        pResult.innerText = 'El precio que tiene q pagar es: $' + newPrice;
    } */