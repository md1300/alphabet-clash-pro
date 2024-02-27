// function play(){
//     // step-1 : hide the home screen. to hide the screen add the class hidden to the home section
    
//     const hiddenElement = document.getElementById('home')
//     // console.log(hiddenElement.classList)
//     hiddenElement.classList.add('hidden');

//  // step-2 :show the playground
//     const openElement=document.getElementById('play-ground');
//     openElement.classList.remove('hidden');
// }
function continueGame(){
    // generate a random alphabet
 const alphabet=grtARandomAlphabet()
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


