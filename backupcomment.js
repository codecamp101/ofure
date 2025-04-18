// function showicon () {
//     // we use ` to create an expression in javascript
//     return (
//         `<svg>
//             <use href="#icon"></use>
//         </svg>`
//     )
// }

// document.querySelector('#container').innerHTML = showicon();

//STRING METHODS

// note all string metods is in camelcase and starts with a fullstop(.)
// .toUpperCase() to make a string all capital letters
//touppercase() // writes all charsin uppercase
// .toLowerCase() opposite of touppercase
//tolowercase() // writes all letters in lowercase
// .at() to find the position of every character in a string 
// .at(...index)  // chooses the chars at the index
// but note that the computer starts counting from 0 :)
// .trim() goes to the end and begining of the string and trims it off
// trim()  // emoves spaces at the begining and ending of a sring
// .slice() it tells you at wat position do u want me to start slicing the string and what position do you want me to end
// .slice(start, end)  // slicies a portion o fthe string
// it will stop at the end number but will not include the end number
// .startWith() it returns either true or false
//i.e 'ABC' .startWith(A) it returns: true
// .endsWith() same thing but the end
// .length to know ho wmany characters are in a string
// .length  // tells you how chars are in the string
// it is a special type of method called a property
// .conCat() to add another string
// .concat(... srings)  // joins all the chars in a string
// ie 'bliss' .conCat(' is', 'a fine goat')
// the reply will be bliss is a fine goat

const hin = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
const check = document.querySelector("#checkBtn");

hin.addEventListener('click', () => {
    // txt.textcontent = 'I CHANGED YOU!!!';
    writeTxt();
    // console.log('Fine.')
});

function writeTxt () {
    const text = 'To walk unsteadily, as like a baby';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count === text.length - 1) clearInterval(id); // we add - 1 to remove the undefined
        txt.textContent += text[count];
        count++; // count++ keeps adding 1 to the value of count which is 0 till it reaches the length of the text for 100 miliseconds  
    }, 100);
}

let score = 0;
check.addEventListener('click', () => {
    document.querySelector('#cup > i').textContent = score;
    score += 5;
    document.querySelector('#action').style.backgroundImage = `url('error_fawzi_mourad.gif')`;
    const timeoutID = setTimeout(() => {
        document.querySelector('#action').style.backgroundImage = 'none';
        clearTimeout(timeoutID);  
    }, 2000);
});