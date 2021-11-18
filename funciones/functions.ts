(() => {

    const hero: string = 'Flash';

    function returnName (): string {
        return hero;
    }

    const activateBatiSignal = ():string  =>  {
        return 'hola mundo cruel';
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName()

})()