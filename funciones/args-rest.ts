(()=> {

    const fullName = (firstName : string, ...restArgs : string[]) : string => {
        return `${firstName} ${restArgs.join(' ')}`
    }  

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Estrada');

    console.log({superman})

})()