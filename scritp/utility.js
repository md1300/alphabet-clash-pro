function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
}


function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}

// ----add background color-------

function setBackgroundColorById(elementId){
  const element =document.getElementById(elementId)
  element.classList.add('bg-orange-400')
}
// -----remove background color 

function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
// ----set score update and life update------
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId) 
     const elementValueText= element.innerText;
     const value = parseInt(elementValueText)
     return value ;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText= value ;
}
// -------------------------

function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('')
    // console.log(alphabets)

const randomNumber=Math.random()*25
const index=Math.round(randomNumber)
// console.log(index)

const alphabet=alphabets[index]
// console.log(alphabet)
return alphabet
}