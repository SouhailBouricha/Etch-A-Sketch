const updateText = () =>{
    const range = document.querySelector("#value");
    const sizeValue = document.querySelector(".sizeValue");
    range.addEventListener("input",(e) =>{
        sizeValue.innerText = `${e.target.value} X ${e.target.value}`;
    });
}
const updateTabel = () =>{
    const range = document.querySelector("#value");
    range.addEventListener("change",(e) =>{
        createTable(e.target.value);
    });
}
const createTable = (Number) =>{
    const game = document.querySelector(".game");
    const childes = document.querySelectorAll(".childe");
    gsap.to(game,0,{gridTemplateColumns : `repeat(${Number},1fr)`});
    gsap.to(game,0,{gridTemplateRows : `repeat(${Number},1fr)`});
    if(childes){
        childes.forEach((e) =>{
            e.remove();
        });
    }
    for (let i = 0; i < (Number * Number); i++) {
        const childe = document.createElement("div");
        childe.classList.add(`childe`, `${i + 1}`);
        game.appendChild(childe);
        
    }
}
updateText();
updateTabel();

console.log("gfg");   