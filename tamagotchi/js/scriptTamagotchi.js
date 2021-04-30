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

// Fonction mise à jours des bars de progression
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

// Fonction mise à jour etat de tamagotchi
function updateState(){

    // Voir si tamagotchi est mort
    if ( (parseInt(faim.textContent) == 0) || (parseInt(soif.textContent) == 0) || (parseInt(sante.textContent) == 0) || (parseInt(hummeur.textContent) == 0) || (parseInt(sommeil.textContent) == 0)){		
        self.etat = "Mort"; 
    }
    else if (parseInt(sante.textContent) < 50) {
        self.etat = "Malade"; 
    }

}

// Fonction de mise à jour de l'image de tamagotchi
function updateImage(){
    if (self.etat == "Mort") {    
            document.getElementById("monImage").src = "ressources/tamagotchi_mort.png";   
    } else if (self.etat == "Malade") {
        document.getElementById("monImage").src = "ressources/tamagotchi_malade.gif";
    }else if(self.etat == "Normal"){
        document.getElementById("monImage").src = "ressources/tamagotchi_normal.gif";
    }
}

// Fonction mise à jour boutton
function updateControl() {

    // si tamagitchi est mort on cache tous ls boutons et on arrête la fonction vie
    if (self.etat == "Mort") {
        clearInterval(intervale);
        document.getElementById('Soigner').style.display ="none";
        document.getElementById('Nourrir').style.display="none";
        document.getElementById('Boire').style.display="none";
        document.getElementById('Jouer').style.display="none";
        document.getElementById('Dormir').style.display="none";
         
    }
}


// Fonctions de mise à jours des caractéristiques de tamagotchi
function setFaim(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    faim.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"faimBar");
    updateState();
    updateImage();
    updateControl();
    

}
function setSoif(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    soif.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"soifBar");
    updateState();
    updateImage();
}

function setSante(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    sante.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"santeBar");
    updateState();
    updateImage();
}

function setDormir(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    sommeil.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"dormirBar");
    updateState();
    updateImage();
}
function setHummeur(value){
    valeurDansLesBornes = dansInterval(value);
    //Mise à jour de l'interface graphique
    hummeur.textContent = valeurDansLesBornes;
    setProgressBarValue(valeurDansLesBornes,"hummeurBar");
    updateState();
    updateImage();
}

// Fonction qui renvoie un nombre aléatoire entre min et max
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Focntion qui simule 1 an de vie de tamagotchi
function vivre() {
    
    setFaim( parseInt(faim.textContent) - entierAleatoire(1, 7) );
    setSoif( parseInt(soif.textContent) - entierAleatoire(1, 7) ); 
    setSante( parseInt(sante.textContent) - entierAleatoire(1, 7));
    setDormir( parseInt(sommeil.textContent) - entierAleatoire(1, 7));
    setHummeur( parseInt(hummeur.textContent) - entierAleatoire(1, 7));
}


document.addEventListener('DOMContentLoaded', init, false);

function init(){
    self.etat = "Normal";
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
        setDormir(parseInt(sommeil.textContent) + 5 );
    }
    document.getElementById('Dormir').addEventListener('click',dormir, true);

    function jouer(){
        setHummeur(parseInt(hummeur.textContent) + 5 );
    }
    document.getElementById('Jouer').addEventListener('click',jouer, true);

    setFaim(60);
    setSoif(60); 
    setSante(60);
    setDormir(60);
    setHummeur(60);
}


