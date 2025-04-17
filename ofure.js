const hin = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
hin.addEventListener('click', () => {
    // txt.textcontent = 'I CHANGED YOU!!!';
    writeTxt();
    // console.log('Fine.')
});
function writeTxt () {
    const text = 'I want to soak garri, I am so hungry';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count === text.length - 1) clearInterval(id); // we add - 1 to remove the undefined
        txt.textContent += text[count];
        count++; // count++ keeps adding 1 to the value of count which is 0 till it reaches the length of the text for 100 miliseconds  
    }, 100);
}