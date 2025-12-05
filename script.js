let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
    })
})

const checkWinner = () =>{
    for(pattern of winPattern){
        
    }
}