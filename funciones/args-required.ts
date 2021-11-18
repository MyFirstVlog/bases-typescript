(()=> {

    const fullName = (firstName : string , lastName : (string | boolean) ) : string => {
        if(!lastName){
            return 'alham dulilah'
        }
        return `${firstName} ${lastName}`
    }

    const ironMan = fullName('Tony', false)
    // const Hulk = fullName() // como recibe por defecto entonces no hay problema de args obligatorios

    console.log({ironMan})
})()