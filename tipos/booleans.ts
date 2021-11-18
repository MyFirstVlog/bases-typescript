
//Funcion autoinvocada

(() => {
    let isSuperman: boolean = false ;
    let isBatman: boolean = false;

    isBatman = (isSuperman) ? true : false 
    console.log({isBatman})
})()