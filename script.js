let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);
const getAbsoluteDistance = (Guesses, target) => {
  const distance = Math.abs(Guesses - target);
  return distance;
}
const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('please enter number between 0-9!');
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
    currentRoundNumber--;
    computerScore--;
    return false;
  }
  let humandistance = getAbsoluteDistance(humanGuess, target);
  let computerdistance = getAbsoluteDistance(computerGuess, target);
  if (humandistance <= computerdistance) {
    return true;
  } else {
    return false;
  }
 }
const updateScore = (winner) => {
  if (winner == 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
  console.log(humanScore);
}
const advanceRound = () =>{
  currentRoundNumber++;
  }

console.log(humanScore);


// class ShiftCipher{
//     constructor(NUM){
      
//     }

//     encrypt(string) {
//         for(let i = 0;i<string.length; i++){
//             let newstring.charCodeAt[i-1] + 2;
//            return newstring.fromCharCode
//         }
//     }

//     decrypt('') {

//     }
//   }


// //toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()



// const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'


// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'





















