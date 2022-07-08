let productoA = 'Vino'  
let productoB = 'Cerveza'
let precioA = 250
let precioB = 180 
let stockA = 15
let stockB = 35

let precioTotal = 0

let nombre = prompt("Ingrese su nombre:")

alert("Bienvenido " + nombre)

let edad = parseInt(prompt("Ingrese su edad"))

if (edad>=18){

    let carrito = prompt ('Que producto quiere comprar? \nElija la opcion numerica: \n1- Vino\n2- Cerveza\n3-Ambos')

    switch (carrito){

        case '1':
            
            let cantidadA = parseInt(prompt('Cuantas botellas quiere llevar?'));

            while(cantidadA>stockA){
                
                alert('Lo sentimos no tenemos stock'); 

                cantidadA = parseInt(prompt('Cuantas botellas quiere llevar?'))
            };
            if (cantidadA<=stockA){

                precioTotal+=cantidadA*precioA

                alert('Esta llevando $'+(cantidadA*precioA)+ ' en vino')
            }
            break;

        case '2':
        
            let cantidadB = parseInt(prompt('Cuantas botellas quiere llevar?'));

            while(cantidadB>stockB){
                
                alert('Lo sentimos no tenemos stock'); 

                cantidadB = parseInt(prompt('Cuantas latas quiere llevar?'))
            };
            if (cantidadB<=stockB){

                precioTotal+=cantidadB*precioB

                alert('Esta llevando $'+(cantidadB*precioB)+ ' en cerveza')
            }    
            break;
        
        case '3':
    
            cantidadAA = parseInt(prompt('Cuantas botellas de vino quiere llevar?'));

            while(cantidadAA>stockA){
                
                alert('Lo sentimos no tenemos stock'); 

                cantidadAA = parseInt(prompt('Cuantas botellas quiere llevar?'))
            };
            if (cantidadAA<=stockA){

                precioTotal+=cantidadAA*precioA

                alert('Esta llevando $'+(cantidadAA*precioA)+ ' en vino')
            }

            let cantidadBB = parseInt(prompt('Cuantas latas de cerveza quiere llevar?'));

            while(cantidadBB>stockB){
                
                alert('Lo sentimos no tenemos stock'); 

                cantidadBB = parseInt(prompt('Cuantas latas quiere llevar?'))
            };
            if (cantidadBB<=stockB){

                precioTotal+=cantidadBB*precioB

                alert('Esta llevando $'+(cantidadBB*precioB)+ ' en cerveza')
            }

            alert('El precio total de la compra es: $'+precioTotal);

            break;   
    }

    alert('Gracias por su compra')
}
else{
    alert('No puede realizar la compra por ser menor de edad')
}