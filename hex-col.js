const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    const x = createColor();
    color.innerHTML = x;
    document.body.style.background = x;
    color.style.color = x;
});

function createColor(){
    let a = "#";
    for(let i=0;i<6;i++){
        let i = Math.floor(Math.random()*16);
        a = a + hex[i];
    }
    return a;
}
