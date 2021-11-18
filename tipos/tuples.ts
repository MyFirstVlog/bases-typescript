(() => {
    const hero:[string,number, boolean] = ['Dr Strange', 100, true] //estructura de tuplas

    // hero[0] = 50 No las acepta
    // hero[1] ='Alejo'

    //Ahora si los acepta

    hero[0] = 'Alejo'
    hero[1] = 50
    hero[2] = !hero[2] || true

    console.log({hero})
})()