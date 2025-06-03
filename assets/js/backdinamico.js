// IIFE - Immediately Invoked Function Expression (protegendo o escopo da função)
(function () { 
    const tempo = document.querySelectorAll('.tempo');
    /* refatorado com Deivid Lahasse */
    tempo.forEach((classes) => {
        classes.addEventListener('mouseenter', () => {
            const corpo = document.querySelector('body');
            corpo.classList = [];
            if (classes.classList.contains('frio')) corpo.classList.add('frio-bg');
            if (classes.classList.contains('sol')) corpo.classList.add('sol-bg');
            if (classes.classList.contains('chuva')) corpo.classList.add('chuva-bg');
            if (classes.classList.contains('nublado')) corpo.classList.add('nublado-bg');
        });
    }); 
})()
