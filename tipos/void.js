"use strict";
(() => {
    function callBatman() {
        // return 1; //se quejara porque no se devuelve 1
        return;
    }
    const a = callBatman(); // si no tiene la fn retorno explicito devolvera un undefined, no hay valor de retorno
    console.log(a);
    //null !== de undefined
    const callSuperman = () => {
        return;
    };
})();
