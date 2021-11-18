"use strict";
(() => {
    var _a;
    const batman = 'batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `El heroe ${1 + 2} es  und Dios del olimpo`;
    console.log(volcanNegro.search('Dios')); //gracias a esto da el intelligence 
    console.log(((_a = batman[15]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'Superman esta muerto'); //null check, si batman tiene esa posicion entoncews haz el tu lowerCase
})();
