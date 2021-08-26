

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

//   console.log(translator[1][1]);
//   console.log(translator[0][1]);
//   let x=0;
//   let y=0;
//   for(let i =0;i<26;i++){
    
//     console.log(translator[x][y]);
//     x++;

//   }

 for (var i = 0; i < translator.length; i++) {
    // console.log(translator[i][0]);
    //  console.log(translator[i][1]);
    if(translator[i][0]=='a'){
        console.log(translator[i][1]);
    }
}

function translateText(){

    let userText = document.getElementById('userInputText').value;
    console.log("bien vue");
    userText = userText.toLowerCase();
    console.log(userText);
}

document.getElementById('Button').addEventListener('click',function(){
    translateText();
});