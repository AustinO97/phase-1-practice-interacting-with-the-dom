const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");

let count = 0;
let paused = false;

pauseButton.addEventListener("click", function() {
    paused = !paused;
    if (paused) {
        pauseCounter();
    } else {
        startCounter();
    }
});

function counterValue() {
    counter.innerText = count;
};

function startCounter() {
    intervalID = setInterval(incrementCounter, 1000)
};
startCounter();

function pauseCounter() {
    clearInterval(intervalID);
};

plusButton.addEventListener("click", incrementCounter);
function incrementCounter() {
    count++;
    counterValue();
};

minusButton.addEventListener("click", decrementCounter);
function decrementCounter() {
    count--;
    counterValue();
};

heartButton.addEventListener("click", addLike);
function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} Has been liked`;
    likes.appendChild(li);
};

commentForm.addEventListener("submit", addComment);
function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}
