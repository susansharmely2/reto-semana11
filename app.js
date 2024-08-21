/*let numeros=[2,6,1,8];
let promedio=0;
let prom;
for(let n of numeros){
promedio+=n;
prom=promedio/4;
}
console.log(prom);*/


/*function premedio(arreglo){
let suma=0;
for(let n=0; n<arreglo.length;n++){
    suma+=arreglo[n]/4;
}
return suma;
}

const respuesta=premedio([2,6,1,8]);
console.log(respuesta);*/


/*function ultimoelemento(arreglo){
   const respuesta=arreglo[arreglo.length-1];
   return respuesta;


}
const resultado=ultimoelemento([4,8,5,3]);
console.log(resultado);*/


/*function suma(arreglo){
    let numeropar=0;
    for( let n=0; n<arreglo.length;n++){
       if(arreglo[n]%2==0)
       {
        numeropar = numeropar + arreglo[n];
       }
    }
    return numeropar;
}
const respuesta=suma([1,2,5,8,9,12,2,3]);
console.log(respuesta);
*/

/*4. */
/*function factorial(numero){
    let multiplicacion=1;
    for( let i=1; i<=numero;i++){
        multiplicacion=multiplicacion * i ;
    }
    return multiplicacion;
}
const respuesta=factorial(6);
console.log(respuesta);*/
/*5. */
/*function numeropar(numero){
    for(let i=1; i<=numero; i++)
        {
            if(i%2==0){
                
                console.log(i,'es par');
            }else{
                console.log(i, 'es impar');
            }
        }
}
    
console.log(numeropar(15));*/

/*6. */
/*function loteria(numero1,numero2){
    for(let i=1;i<=50;i++){
       console.log(i);
        if(numero1==i || numero2==i) 
            console.log('loteria');
     }

}
console.log(loteria(4,33));*/

/*7.*/
/*for(let i=1;i<=100;i++){
  
    if(i%3==0 && i%5==0){
        console.log('fizzBuzz');
    } else if(i%5==0){
        console.log('Buzz');
    }else if(i%3==0){
        console.log('fizz');
        
    }else
    console.log(i);
}*/
/*8. */
/*let expresion='oreojhjh';
switch(expresion){
    case "sin topping":
        console.log('el helado sin topping cuesta 50mxn');
        break;
    case "oreo":
        console.log('oreo cuesta 10mxn');
        break;
    case "kitkat":
        console.log("kitkat cuesta 15mxn");
        break;
    case "brownie":
        console.log('brownie cuesta 20mxn');
        break;
        
        default:
            console.log('lo sentimos no tenemos este topping ' + expresion + 'el helado sin topping cuesta 50mxn');
    
}*/

/*9.*/
/*let nivel='curso';
let precio;
let preciototal;

switch(nivel){

    case "curso":
       precio=4999*2;
        break;
    case "carrera":
        precio=3999*6;
        break;
    case "master":
        precio=2999*12;
             
}

let beca='facebook';
switch(beca){

    case "google":
        descuento=0.2*precio;
        break;
    
    case "facebook":
        descuento=0.15*precio;
        break;

    case "jesua":
        descuento=0.5*precio;

}

preciototal=precio-descuento;
console.log(preciototal);*/

/*10 */
let pagototal;
let vehiculo='coche';
let distanciarecorrida=100;

switch(vehiculo){
    
    case "coche":

    cargoextra=0.2*distanciarecorrida;

    case "moto":

    cargoextra=0.1*distanciarecorrida;


    case "autobus":
        cargoextra=0.5*distanciarecorrida;
}

if(for( let i=0; i<=litros;i++){

});

pagototal=cargoextra*litros;
