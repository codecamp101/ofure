/* this changes the text inside of an element
document.querySelector('#user > b').textContent = 'KENO';
document.querySelector('#user > i').textContent = '?'; 
*/
// This is an array of numbers
// [1,2,"computer",4]
// const wp = "Wrong Password"
// document.querySelector('output').textContent = wp; 

const eye = document.querySelector("#eye");
const output = document.querySelector("output");
const ipt =  document.querySelector("input");
const fm = document.querySelector("form");
const pop = document.querySelector("#pop");
const user = document.querySelector("#user");
const start = document.querySelector("#start");
const pan = document.querySelector("#panel");

// this unmakses the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});

// this maskes the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});

// this submits the password with the form
fm.addEventListener("submit" , (e) => {
    e.preventDefault(); // this will stop the page from re-loading
    const pd = 'ofure';
    if (pd === ipt.value) {
        user.remove();
        fm.remove();
        output.textContent = 'signing you in . . .';
        const timeoutID = setTimeout(() => {
            output.remove();
            pop.showPopover();  
            clearTimeout(timeoutID);  
        }, 2000);
    } else {
        output.textContent = 'Wrong Password';
    }
});

// this shows/hides the panel
start.addEventListener("click" , () => {
    pan.classList.toggle("on");
});

// this formats a unix number into a human-readable date
const dob = new Date("07/27/2010").getTime(); // the date format for javascript is mm-dd-yyy
pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(dob);

// FUNCTIONS
// A function is a group of statements that does not run unless when told to or commanded to or called
// to creae a function first type: function the name then (), ie function calculator () (then type what you want the function to do)
// example below;
function calculator () {
    console.log(2 + 4);  // these four are called operators
    console.log(10 - 5);
    console.log(10 / 2);
    console.log(3 * 3);
    console.log(10 % 2); // this is called modulus (short form is mod); it is the reminder of a division
}
calculator(); // you do this to call the function 

 function callConfetti () {
   /*
    const t = "a";
    const u = 3;
    console.log(t - u); // this is called concatenation (joining two or more strings together)
    */
   const d = new Date("07/27/2010").getDate();
   const m = new Date("07/27/2010").getMonth();
   const today = Date.now(); // note that 'date.now' will give you the unit number of the date
   if (new Date(today).getDate() === d && new Date(today).getMonth() === m) {
    pan.classList.add('bgi');
   }
   console.log(d);
   //console.log(m);
 }
 callConfetti();