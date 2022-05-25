

document.querySelector('#ingresar').onclick=function(){

const primerNombre = document.querySelector('#primer-nombre').value;
const segundoNombre = document.querySelector('#segundo-nombre').value;
const apellido = document.querySelector('#apellido').value;
const textoSaludo = Saludar (primerNombre, segundoNombre, apellido);

const textoBienvenida = document.querySelector('h1');

console.log(textoBienvenida.innerText);

textoBienvenida.innerText= textoSaludo;



return false;

}

function Saludar (primerNombre, segundoNombre, apellido){

   return  `Bienvenida ${primerNombre} ${segundoNombre} ${apellido}!`

}






//

//`Bienvenido ${primerNombre} ${segundoNombre} ${apellido}!`

