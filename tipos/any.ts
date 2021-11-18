(() => {

    let avenger: any = 123;
    let exists;
    let power;
    // const props; // esto es un errror la variable debe estar inicializada

    avenger = 'Dr Stange'
    console.log((avenger as string).charAt(1)) //no hay sinonimo en js
    avenger = 123.3213
    console.log((<number>avenger).toFixed(2))
    // console.log(avenger.charAt(0))

})()