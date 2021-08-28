
// notre tableau pour traduire les lettre en nombre de chiffre associé
var translator = [
    // 2 
    ['a', 2],
    ['b', 22],
    ['c', 222],
    // 3
    ['d', 3],
    ['e', 33],
    ['f', 333],
    // 4
    ['g', 4],
    ['h', 44],
    ['i', 444],
    // 5
    ['j', 5],
    ['k', 55],
    ['l', 555],
    // 6
    ['m', 6],
    ['n', 66],
    ['o', 666],
    // 7
    ['p', 7],
    ['q', 77],
    ['r', 777],
    ['s', 7777],
    // 8
    ['t', 8],
    ['u', 88],
    ['v', 888],
    // 9
    ['w', 9],
    ['x', 99],
    ['y', 999],
    ['z', 9999],
  ];

function translateText(){

    let userText = document.getElementById('userInputText').value;// on recupere les données USER
    let resultTranslation = document.getElementById('translation');// on recupere le P pour afficher la traduction
    userText = userText.toLowerCase(); // on met en minuscule pour eviter les erreurs dans le tableau
    let toTranslate = [userText.length];

    for (let i = 0; i < userText.length; i++) {//on parcours le text du USER
        toTranslate[i] = userText[i];
        
        if(userText[0]==" " )// si il y a un espace au debut on lui dit que c'est pas possible et on refresh
        {
            alert("Enleve l'espace devant votre phrase");
            window.location.reload();
        }
        else if( userText[0]=="'" || userText[0]=="," || userText[0]=="^" || userText[0]=="é" || userText[0]=="@" || userText[0]=="è" || userText[0]=="&")// si il a des carac speciaux  on lui dit que c'est pas possible et on refresh
        {
            alert("Pas de caractere special comme ' , # ^ é @ é & etc");
            window.location.reload();
        }
        
        for (let y =0;y<26;y++){// on compare l'indice i du user avec les 26 possibilitées du translator pour trouver une occurence 
            if(toTranslate[i]==translator[y][0]){
                toTranslate[i] = translator[y][1];// si l'occurence est trouvé alors on convertie la lettre en chiffre
            }
        }
        
    }
    resultTranslation.innerText = toTranslate.join(' '); // on met un espace entre chaque chiffre pour la lisibilité
    
}

document.getElementById('Button').addEventListener('click',function(){// on appele la function au click du Button
    translateText();
    
});