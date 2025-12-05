let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turnO = true;
let msg = document.querySelector("#msg");

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        box.style.pointerEvents = "none";

        checkWinner();
    })
})

const disableBoxes = () => {
    boxes.forEach(box.style.pointerEvents = "none");
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner is " + val1);
                showWinner(val1);
                return;
            }
        }
    }
}

const reset = () => {
    boxes.forEach(box => {
    box.innerText = "";
    box.style.pointerEvents = "";
});
turnO = true;
msg.innerText = "";
msg.classList.add("hide");
}


resetbtn.addEventListener("click", reset);