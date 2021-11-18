"use strict";
(() => {
    let avengers = 1;
    console.log(avengers);
    const vaillains = 20;
    if (avengers < vaillains) {
        console.log('estamos jodidos');
    }
    else {
        console.log('nos salvamos');
    }
    //Los NaN son considerados un tipo de numeros, tener cuidado con eso
    avengers = Number('123A');
    console.log({ avengers });
})();
