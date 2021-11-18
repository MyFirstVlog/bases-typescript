(()=> {

    const fullName = (firstName : string = 'Bruce', lastName : (string | boolean) = 'Banner') : string => {
        if(!lastName){
            return 'alham dulilah'
        }
        return `${firstName} ${lastName}`
    }

    const totalAge   = (date : string , age? : string) : void=> { // hace que no sea obligatorio un arg
            console.log(`${date} ${age || 24}`)
    }

    const ironMan = fullName('Tony', false)
    const Hulk = fullName() // como recibe por defecto entonces no hay problema de args obligatorios

    totalAge('sep')
})()