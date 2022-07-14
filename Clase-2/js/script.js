let productoA = 'Vino'  
let productoB = 'Cerveza'
let precioA = 250
let precioB = 180 
let stockA = 15
let stockB = 35

let precioTotal = 0

let nombre = prompt("Ingrese su nombre:")

alert("Bienvenido " + nombre)

let edad = parseInt(prompt("Ingrese su edad"));

function calculo(cantidad,precio,stock) {
    while(cantidad>stock){
                
        alert('Lo sentimos no tenemos stock'); 

        cantidad = parseInt(prompt('Cuantas quiere llevar?'))
    };
    if (cantidad<=stock){

        precioTotal+=cantidad*precio

        alert('Esta llevando $'+(cantidad*precio))
    } 
}

if (edad>=18){

    let carrito = prompt ('Que producto quiere comprar? \nElija la opcion numerica: \n1- Vino\n2- Cerveza\n3-Ambos')

    switch (carrito){

        case '1':
            
            let cantidadA = parseInt(prompt('Cuantas botellas quiere llevar?'));

            calculo(cantidadA,precioA,stockA)

            break;

        case '2':
        
            let cantidadB = parseInt(prompt('Cuantas botellas quiere llevar?'));

            calculo(cantidadB,precioB,stockB)    

            break;
        
        case '3':
    
            let cantidadAA = parseInt(prompt('Cuantas botellas de vino quiere llevar?'));

            calculo(cantidadAA,precioA,stockA)

            let cantidadBB = parseInt(prompt('Cuantas latas de cerveza quiere llevar?'));

            calculo(cantidadBB,precioB,stockB)

            alert('El precio total de la compra es: $'+precioTotal);

            break;   
    }

    alert('Gracias por su compra')
}
else{
    alert('No puede realizar la compra por ser menor de edad')
}