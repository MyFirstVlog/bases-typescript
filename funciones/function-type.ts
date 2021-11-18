(()=> {

    const addNumber = (a : number, b : number) => a + b;

    const greet = (name : string) => `Hola ${name}`

    const saveTheWorld = () => `El mundo esta salvado !!!`


    let myFunction : Function;

    myFunction = addNumber //*aqui estoy referenciando 

    //*asi si funcionaria correctamente

    let myFuncionOpcionDos: (x:number,y:number) => number; //?una funcion qeu devuelve un numero 

    myFuncionOpcionDos = addNumber 

    console.log(myFunction(1, 2))

    myFunction = greet 

    console.log(greet('Alejandro'))

    myFunction = saveTheWorld

    console.log(saveTheWorld())

})()