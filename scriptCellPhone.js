

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
    ['o', 666]
  ];

function translateText(){

    let userText = document.getElementById('userInputText').value;
    userText = userText.toLowerCase();

    for (let i = 0; i < userText.length; i++) {
        if(userText[0]==" " )
        {
            alert("Enleve l'espace devant votre phrase");
            window.location.reload();
        }
        else if( userText[0]=="'" || userText[0]=="," || userText[0]=="^" || userText[0]=="é" || userText[0]=="@" || userText[0]=="è" || userText[0]=="&")
        {
            alert("Pas de caractere special comme ' , # ^ é @ é & etc");
            window.location.reload();
        }
        else if(userText[i]===" ")
        {
            console.log("Espace" +i );
        }
    }
}

document.getElementById('Button').addEventListener('click',function(){
    translateText();
});