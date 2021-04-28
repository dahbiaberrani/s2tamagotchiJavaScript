var intervale = setInterval("vivre()",2000);
// fonction qui garantie que la valeur des cractéristiques restent entre 0 et 100  
function dansInterval(valeur){
    if (valeur > 100) {
        returnvaleur = 100;
    }
    else if (valeur < 0){
        returnvaleur = 0;

    }else{
        returnvaleur = valeur;
    }

    return returnvaleur;
}
function setFaim(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    faim.textContent = valeurDansLesBornes;
    var faimProgressBarValue = document.getElementById("faimBar");              
    faimProgressBarValue.style.width = valeurDansLesBornes + "%"; 
}

function vivre() {
    setFaim( parseInt(faim.textContent) - 1 );
    soif.textContent = dansInterval(parseInt(soif.textContent) - 1);
    sante.textContent =dansInterval( parseInt(sante.textContent) - 1);
    dormir.textContent =dansInterval( parseInt(dormir.textContent) - 1);
    jouer.textContent =dansInterval( parseInt(jouer.textContent) - 1);

    if ( (parseInt(faim.textContent) <= 0) || (parseInt(soif.textContent) <= 0) || (parseInt(sante.textContent) <= 0) || (parseInt(jouer.textContent) <= 0) || (parseInt(dormir.textContent) <= 0)){		
        clearInterval(intervale); 
        //cacher bouton ou empecher utilsation
    }
}



document.addEventListener('DOMContentLoaded', init, false);

function init(){
    function nourrir(){
        setFaim( parseInt(faim.textContent) + 5 );
    }
    document.getElementById('Nourrir').addEventListener('click', nourrir, true);

    function boire(){
        soif.textContent = dansInterval( parseInt(soif.textContent) + 5 );
    }
    document.getElementById('Boire').addEventListener('click',boire, true);

    function soigner(){
        sante.textContent =  dansInterval(parseInt(sante.textContent) + 5) ; 
    }
    document.getElementById('Soigner').addEventListener('click',soigner, true);


  

};

// progress bar 
