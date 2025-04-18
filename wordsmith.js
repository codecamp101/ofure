let score = 0;
const wordsmith = [
    {
        word: "ROBINHOOD",
        hint: "He robbed the rich to feed the poor.",
        offset: [1,2,3,4,6,7]
    },
    {
        word: "KING",
        hint: "God save the ...!",
        offset: [1,3]
    },
    {
        word: "HUMMINGBIRD",
        hint: "A fluttering bird.",
        offset: [0,1,4,5,7,8]
    },
    {
        word: "ARCTIC",
        hint: "The smallest ocean in the world.",
        offset: [1,2,4]
    },
    {
        word: "CAFE",
        hint: "A coffee shop.",
        offset: [0,2]
    },
    {
        word: "CANS",
        hint: "Metal food containers.",
        offset: [2,3]
    },
    {
        word: "ALPHA",
        hint: "First Greek alphabet.",
        offset: [1,3]
    },
    {
        word: "TWELVE",
        hint: "Jesus' disciples.",
        offset: [1,2,5]
    },
    {
        word: "STERILE",
        hint: "Aseptic, free from bacteria.",
        offset: [2,3,6]
    },
    {
        word: "ITALY",
        hint: "Country of the Leaning Tower of Pisa.",
        offset: [1,2,3]
    },
    {
        word: "BASKETBALL",
        hint: "Most paid sport in the world",
        offset: [0,2,3,5,7,8,9]
    },
    {
        word: "PROGRAMMING",
        hint: "A way of writing a different language",
        offset: [1,4,7,8,9,10]
    },
    {
        word: "PYRAMID",
        hint: "A place where mummy are said to live in",
        offset: [0,1,3,4,6,]
    },
    {
        word: "FUNDAMENTALS",
        hint: "Another word for basics",
        offset: [0,1,3,4,6,7,10,11]
    },
    {
        word: "SYMBIOSIS",
        hint: "When two animals are gaining from each other",
        offset: [0,2,3,4,6,8]
    },
    {
        word: "ORIZA-SATIVA",
        hint: "Botanical name for rice",
        offset: [0,3,4,6,8,10]
    },
    {
        word: "ZEA-MAIZ",
        hint: "Bonitanical name for maize",
        offset: [0,2,4,7]
    },
    {
        word: "CALCIUM",
        hint: "20th element in the Periodic Table",
        offset: [0,3,5,6]
    },
    {
        word: "PETER",
        hint: "First disciple of Jesus",
        offset: [0,2,4]
    },
    {
        word: "BLUEPRINT",
        hint: "Architects use it to make sketches",
        offset: [0,2,4,5,7,8]
    }

];
const numOfWords = wordsmith.length;
let nextWord = 0;
const gameover = document.querySelector('#gameover');
const checkBtn = document.querySelector('#checkBtn');
const txt = document.querySelector('#txt');
const chevrons = document.querySelectorAll('.chevron');
chevrons.forEach((chv, idx) => {
    chv.addEventListener('click', (e) => {
        if (!idx) {
            //go back
            if (!nextWord) return;
            createTiles();
            nextWord--;
        } else {
            //go forward
            if (!checkBtn.disabled) return alert('Check your answer first.');
            if (nextWord === wordsmith.length) {
                // localStorage.getItem('score') ? false : localStorage.setItem('score', score);
                return;
            } else {
                createTiles();
                nextWord++;
            }
        }
        checkBtn.disabled = false;
        txt.textContent = '';
    });
});
const wordElem = document.querySelector('#word');
function createTiles () {
    //first clear old tiles
    wordElem.querySelectorAll('span').forEach(sp => sp.remove());
    for (let p = 0; p < wordsmith[nextWord].word.length; p++) {
        if (wordsmith[nextWord].offset.includes(p)) {
            wordElem.insertAdjacentHTML('beforeend', '<span class="tile" contenteditable="true"></span>');
        } else {
            wordElem.insertAdjacentHTML('beforeend', `<span class="tile">${wordsmith[nextWord].word[p]}</span>`);
        }
    }
}
createTiles();
nextWord++;
const hintBtn = document.querySelector('#hintBtn');
hintBtn.addEventListener('click', () => {
    hintBtn.disabled = true;
    getHint(hintBtn);
});
function getHint (btn) {
    const text = wordsmith[nextWord-1].hint;
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if (count === text.length - 1) {
            clearInterval(id);
            btn.disabled = false;
        }
        txt.textContent += text[count];
        count++; //count++ keeps adding 1 to the value of count
    }, 70);
}
//check answer
const action = document.getElementById('action');
checkBtn.addEventListener('click', () => {
    let answer = [...document.querySelectorAll('.tile')].map(x => x.textContent).join('');
    if (answer.length !== wordsmith[nextWord-1].word.length) return alert('Not complete.');
    checkBtn.disabled = true;
    if (answer.toLowerCase() === wordsmith[nextWord-1].word.toLowerCase()) {
        //correct answer
        action.style.backgroundImage = 'url("confetti.gif")';
        const sid = setTimeout(() => {
            action.style.backgroundImage = 'none';
            if (nextWord === wordsmith.length) {
                document.getElementById('total_score').innerHTML = `${score}/<sup>${wordsmith.length*5}</sup>`;
                gameover.showPopover();
            } else {
                score += 5;
                document.querySelector('#cup > i').textContent = score;
                createTiles();
                nextWord++;
                checkBtn.disabled = false;
            }
            txt.textContent = '';
            clearTimeout(sid);
        }, 2000);
    } else {
        //wrong answer
        action.style.backgroundImage = 'url("error_fawzi_mourad.gif")';
        const sid = setTimeout(() => {
            action.style.backgroundImage = 'none';
            document.querySelectorAll('.tile').forEach((tile, idx) => tile.textContent = wordsmith[nextWord-1].word[idx]);
            document.querySelectorAll('[contenteditable]').forEach(tile => tile.style.color = '#e35');
            txt.textContent = '';
            clearTimeout(sid);
        }, 2000);
    }
});
// gameover.showPopover();
//restartBtn
document.querySelector('#restartBtn').addEventListener('click', () => {
    location.reload();
});