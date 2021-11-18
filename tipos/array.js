"use strict";
(() => {
    const numbers = [1, 2, 3, 4, '5', 6, 7, 8, 9]; //raro que se haga asi
    const villains = ['OmegaRojo', 'Dormau', 'Duende Verde'];
    villains.forEach((villain, index) => console.log(`${index} ${villain.toUpperCase()}`));
    numbers.push('jaja');
    numbers.push(true);
    console.log(numbers);
})();
