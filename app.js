let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#resetButton");
let sym=true;
let winList=[[0,1,2],[0,4,8],[0,3,6],[2,5,8],[2,4,6],[3,4,5],[6,7,8],[1,4,7]];
let mesg=document.querySelector("#msg");
let replay=document.querySelector("#replayBut");


let draw=false;



const message= (val) => {
    let el1= document.querySelector("#mes");
    el1.classList.remove("hide");
    el1.innerText=`Winner is ${val}`;
    replay.classList.remove("hide");
    reset.classList.add("hide");
    
}

const disabledBtns= () =>{
    for(let bts of btns){
        bts.disabled=true;
    }
}

const winner = () =>{
    for(let pat of winList){
        if(btns[pat[0]].innerText != '' && btns[pat[1]].innerText != '' && btns[pat[2]].innerText != ''){
            if(btns[pat[0]].innerText === btns[pat[1]].innerText && btns[pat[1]].innerText === btns[pat[2]].innerText){
                disabledBtns();
                console.log('WINNER is',btns[pat[0]].innerText);
                message(btns[pat[0]].innerText);

                
            }
        }
    }
    
}

let idx=0;

btns.forEach((btn)=> {
    btn.addEventListener("click",()=>
        {
            if(sym){
                btn.innerText='X';
                sym= false;
            }else{
                btn.innerText='O';
                sym=true;
            }
            btn.disabled= true;
            idx++;
            for(let bx of btns){
                if (bx.disabled){
                    reset.classList.remove("hide");
                    break;
                }
            }
            if(idx<9)
            {
                winner();

            }
            else
            {
                let el1= document.querySelector("#mes");
                el1.classList.remove("hide");
                el1.innerText=`Draw Match`;
                replay.classList.remove("hide");
                reset.classList.add("hide");
            }
        });
    
});

const replaybut = () =>{
    let el1= document.querySelector("#mes");
    el1.classList.add("hide");
    replay.classList.add("hide");
    idx=0;
    sym=true;
    for(let box of btns){
        if(box.disabled){
            box.disabled=false;
            box.innerText='';
        }
    }

}

const res= ()=>{
    if(reset.classList.contains("hide")=== false)
        reset.classList.add("hide");
    idx=0;
    sym=true;
    for(let box of btns){
        if(box.disabled){
            box.disabled=false;
            box.innerText='';
        }
    }
};

reset.addEventListener("click",res);
replay.addEventListener("click",replaybut);
