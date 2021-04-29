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

function setProgressBarValue(value,progressBarName){ 
     
    var elmentProgressBarValue = document.getElementById(progressBarName);  
    elmentProgressBarValue.style.width =  value + "%";
    // mise à jours de la couleur 
    if (value >50) {
        color =  "green";
    }else if  (value > 25){
        color  =  "orange";
    }else{
        color  = "red";
    }
    elmentProgressBarValue.style.background = color;
}

    


function setFaim(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    faim.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"faimBar");
}
function setSoif(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    soif.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"soifBar")
}

function setSante(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    sante.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"santeBar")
}

function setDormir(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    dormir.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"dormirBar")
}
function setHummeur(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    hummeur.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"hummeurBar")
}

function vivre() {
    setFaim( parseInt(faim.textContent) - 1 );
    setSoif( parseInt(soif.textContent) - 1 );
    
    setSante( parseInt(sante.textContent) - 1);
    setDormir( parseInt(dormir.textContent) - 1);
    setHummeur( parseInt(hummeur.textContent) - 1);

    // mort de tamagotchi
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
        setSoif( parseInt(soif.textContent) + 5 );
    }
    document.getElementById('Boire').addEventListener('click',boire, true);

    function soigner(){
        setSante(parseInt(sante.textContent) + 5 );
    }
    document.getElementById('Soigner').addEventListener('click',soigner, true);

    function dormir(){
        setDormir(parseInt(dormir.textContent) + 5 );
    }
    document.getElementById('Dormir').addEventListener('click',dormir, true);

    function hummeur(){
        setHummeur(parseInt(hummeur.textContent) + 5 );
    }
    document.getElementById('Jouer').addEventListener('click',hummeur, true);
};

// progress bar 
