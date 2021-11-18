"use strict";
//Funcion autoinvocada
(() => {
    let isSuperman = false;
    let isBatman = false;
    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman });
})();
