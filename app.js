"use strict";
//no es recomendable que ts verifique el tipo de datos
const a = 10;
let b; //deja cambiar el tipo de dato numero
b = 3.14151234;
let c; //tipo de dato any, cualquier tipo de variable perdemos reglas pero aumentamos flxibilidad
let d;
// d = 43242
function sayHello(msg) {
    console.log(msg);
    console.log(msg.length);
}
sayHello('la vita e bella');
//Funcion ananoima auto invocada, muy usada en js
(() => {
    console.log(a);
})();
