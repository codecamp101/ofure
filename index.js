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
