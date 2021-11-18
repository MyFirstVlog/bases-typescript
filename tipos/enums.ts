(() => {

    //ayuda a trabajar con valores emanticos, valores, min,medios o maxs
    
    enum AudioLevel {
        min, 
        medium, 
        max
    }

    enum AudioLevel2 {
        min = 1, 
        medium,  //este tendria el valor de 2, auto incremenental
        max = 10
    }

    //da valores de peso a cada item de la enumeracion

    let currentAudio = AudioLevel.max;

    console.log({currentAudio})

})()