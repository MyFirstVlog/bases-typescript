(()=> {

    type Hero = {
        name:string;
        age? : number;
        powers : number[];
        getName? : ()=> string;
    }

    let flash: Hero = {
        name : 'Barry Allen',
        age : 24,
        powers : [1, 2]
    }
    let superman: Hero= {
        name : 'Clark Kent',
        age : 43,
        powers : [2, 3],
        getName(){
            return this.name
        }
    }

    

    //* para< meter mas datos a un objeto ya definido 

    console.log(superman.getName!()) // si hay prblema de que metodo opuede ser undefined

})()