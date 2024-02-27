// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
    
//     const hiddenElement = document.getElementById('home')
//     // console.log(hiddenElement.classList)
//     hiddenElement.classList.add('hidden');

//  // step-2 :show the playground
//     const openElement=document.getElementById('play-ground');
//     openElement.classList.remove('hidden');
// }
// ---------capture keyboard------------
function handleKeyboardButtonPress(event){
     const playerPressed=event.key;
    console.log('player pressed',playerPressed)

    // get the expected to press
    const currentAlphabetElement =document.getElementById('current-alphabet')
    const currentAlphabet =  currentAlphabetElement.innerText;
    // console.log('this is current alphabet',currentAlphabet)
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log('now expected alphabet',expectedAlphabet)
    console.log(playerPressed,expectedAlphabet)


    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('you get a one point');
        //---------- update score-------------
        // 1 : ---get the current score----------
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText= currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore)
        // 2 : ----incrase the score by 1--------
        const newScore=currentScore+ 1;
        // 3 :-------show the update score----------
        currentScoreElement.innerText=newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you loss your live')
    //    ---update life-------
    // -----get the current life-------
    const currentLifeElement = document.getElementById('current-life')
    const currentLifeText=currentLifeElement.innerText;
    const currentLife=parseInt(currentLifeText) ;
// ---decrease the current life-------
   const newLife = currentLife - 1 ;
//    ----------show the update life----------
   currentLifeElement.innerText=newLife;
    }
 
    
}
// capture keyboard key press   
document.addEventListener('keyup',handleKeyboardButtonPress )






function continueGame(){
    // generate a random alphabet
 const alphabet=getARandomAlphabet()
 console.log('the random value',alphabet)

// set randomly generated alphabet to the screen ( show it)
 const currentAlphabet=document.getElementById('current-alphabet');
 currentAlphabet.innerText=alphabet

//  set background color in keyboard
 setBackgroundColorById(alphabet)

}


function play(){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
}


