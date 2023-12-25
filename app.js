let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset-btn");
let nbtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
let count=0;
let arr=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];
// console.log(arr);
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        box.classList.add("glow");
        // console.log("box was click ! ");
        count++;
        if(turno)
        {
            box.innerText="O";
            turno=false;
            box.classList.add("glow-red");
            
        }
        else
        {
            box.innerText="X"
            turno=true;
            box.classList.add("glow-green");
        }
        box.disabled=true;
        checkwinner();
        if(count===9)
        {
            drawmsg();
        }
        
    })

})
let checkwinner=()=>
{
    for(let res of arr)
    {
      let pos1=boxes[res[0]].innerText;
      let pos2=boxes[res[1]].innerText;
      let pos3=boxes[res[2]].innerText;

      if((pos1!="" && pos2!="" && pos3!="")&&(pos1===pos2 && pos2===pos3))
      {
        showwinner(pos1);
    //    console.log("winner");

      }

    }
}
let disable=()=>
{
    count=0;
    for(let box of boxes)
    {
        box.classList.remove("glow-red");
        box.classList.remove("glow-green");
        box.disabled=true;
    }
}
let enable=()=>
{
    for(let box of boxes)
    {
        box.classList.remove("glow-red");
        box.classList.remove("glow-green");
        box.disabled=false;
        box.innerText="";
    }
}
let showwinner=(winner)=>
{
    disable();
    msg.innerText=`Congratulations, the winner is....${winner}`;
    msgcontainer.classList.remove("hide");

    
}
let resetg=()=>
{
    count=0;
    turno=true;
    enable();
    msgcontainer.classList.add("hide");

}

reset.addEventListener("click",resetg);
nbtn.addEventListener("click",resetg);
let drawmsg=()=>
{
    
    msg.innerText=`It\'s a draw! The match is tied.`;
    msgcontainer.classList.remove("hide");
    disable();

}







