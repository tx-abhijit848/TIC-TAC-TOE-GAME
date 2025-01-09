let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#rst-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let para=document.querySelector(".msg");
let turno=true;

const winning=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       // console.log("abhijit nandi");
        if(turno){
            box.innerText="o";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showWinner=(posVal1)=>{
    msg.innerText=`Congratulations,${posVal1} is Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();


}

const checkWinner=()=>{
    for(let pattern of winning){
            let posVal1=boxes[pattern[0]].innerText;
            let posVal2=boxes[pattern[1]].innerText;
            let posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                //console.log("winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
rstBtn.addEventListener("click",resetGame);