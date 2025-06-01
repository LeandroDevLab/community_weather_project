// IIFE - Immediately Invoked Function Expression (protegendo o escopo da função)
(function () {
    
    const tempo = document.querySelectorAll('.tempo');

    tempo.forEach((classes) => {
        classes.addEventListener('mouseenter', () => {
            if (classes.classList.contains('frio')) {
                return document.body.style.background = "url(../assets/img/frio.png)";
            };
            if (classes.classList.contains('sol')) {
                return document.body.style.background = 'orange';
            };
            if (classes.classList.contains('chuva')) {
                return document.body.style.background = 'cyan';
            };
            if (classes.classList.contains('nublado')) {
                return document.body.style.background = 'gray';
            };
        });
    }); 
        
})()