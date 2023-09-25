//Funciones de orden superior
//high order Funcions
//Funciones que reciben otras funciones como parametros

const myFunctionWhitBigName = () =>{
    console.log('Esta es una funcion');
}
mufunctionWhithBigName
const funOne = () => {
    console.log('Ejecuta la funciom1');

}
const funTwo = (name) => {
console.log('Hola' + name);
console.log('Ejecuta funcion 2');

}

funOne();
funTwo();
const funThree = (otherFunction) => {
    otherFunction();
    console('Ejecuta funcion 3');
}
 funThree(funOne);