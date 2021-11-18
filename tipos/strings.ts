(()=> {

    const batman : string = 'batman';
    const linternaVerde : string = 'Linterna Verde';
    const volcanNegro : string = `El heroe ${1 + 2} es  und Dios del olimpo`;

    console.log(volcanNegro.search('Dios')); //gracias a esto da el intelligence 
    
    console.log(batman[15]?.toLowerCase() || 'Superman esta muerto') //null check, si batman tiene esa posicion entoncews haz el tu lowerCase




})()