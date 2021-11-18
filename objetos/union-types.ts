(()=> {

    type Hero = {
        name:string;
        age? : number;
        powers : number[];
        getName? : ()=> string;
    }

    let myCustomVariable : (string | number | Hero) = 'Georginho'

    myCustomVariable = {
        name:'Alejandro',
        powers:[1,23]
    }

    console.log( myCustomVariable)
    
})()