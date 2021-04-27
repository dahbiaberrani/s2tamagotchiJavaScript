var intervale = setInterval("enVie()", 1000);

function enVie() {
    faim.textContent = (parseInt(faim.textContent)) - 1;
    soif.textContent = (parseInt(soif.textContent)) - 1;
    sante.textContent = (parseInt(sante.textContent)) - 1;

    if ( (parseInt(faim.textContent) <= 0) || (parseInt(soif.textContent) <= 0) || (parseInt(sante.textContent) <= 0) ){		
        clearInterval(intervale); 
        //cacher bouton ou empecher utilsation
    }
}

function nourrir(){
    faim.textContent = parseInt(faim.textContent) + 5 ; 
    if (faim.textContent > 100) {
        faim.textContent = 100;
    }
}

function boire(){
    soif.textContent = parseInt(soif.textContent) + 5 ;
    if (soif.textContent > 100) {
        soif.textContent = 100;
    } 
}

function soigner(){
    sante.textContent = parseInt(sante.textContent) + 5 ; 
    if (sante.textContent > 100) {
        sante.textContent = 100;
    }
}
