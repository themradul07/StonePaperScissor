let a = document.querySelectorAll('.bordr');
let b = Array.from(a);
let res = document.querySelector('.result');

let borderelem;
let borderCheck = 0;
let CompText =document.querySelector('.comp');
let btn = document.querySelector(".btn");

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener("click", (e) => {
        console.log(borderCheck);
        if (borderCheck == 0) {
            e.target.style.border = "6px solid black";
            borderCheck = 1;
            
            borderelem = e.target;
            // console.log(borderCheck);
            let choice = ["Stone", "Paper", "Scissor"];

            let CompChoice = Math.floor(Math.random() * 3);
            console.log(choice[CompChoice]);

            CompText.innerHTML = `Computer Choice : ${choice[CompChoice]}`
            
            console.log(res);
            let humanChoice = e.target.id;
            let CompuChoice = choice[CompChoice];
            if(humanChoice === CompuChoice){
                res.innerHTML ="Result : Draw"

            }else{
                
                switch(humanChoice) {
                    case "Stone":
                        switch(CompuChoice) {
                            case "Paper":
                                res.innerHTML ="Result : You Lose !!"
                              
                              break;
                            case "Scissor":
                                res.innerHTML ="Result : You Win !!"

                              
                              break;
                            default:
                              
                          }
                      break;
                    case "Paper":
                        switch(CompuChoice) {
                            case "Stone":
                                res.innerHTML ="Result : You Win !!"
                              
                              break;
                            case "Scissor":
                                res.innerHTML ="Result : You Lose !!"

                              
                              break;
                            default:
                              
                          }
                      break;
                    case "Scissor":
                        switch(CompuChoice) {
                            case "Paper":
                                res.innerHTML ="Result : You Win !!"
                              
                              break;
                            case "Stone":
                                res.innerHTML ="Result : You Lose !!"

                              
                              break;
                            default:
                              
                          }
                      break;
                    default:
                      // code block
                  }
            }
            
            btn.style.display = "flex";


        }
        else {
            console.log(borderelem);
            borderelem.style.border = "0px"

            // e.target.style.border = "0px solid black";
            borderCheck = 0;
            console.log(borderCheck)
        }

    })
    
    
    
}
let reset =document.querySelector('button');
console.log(reset);

reset.addEventListener("click" , () => {
    borderelem.style.border ="0px"
    console.log("before :", borderCheck)
    borderCheck = 0;
    console.log("after :", borderCheck)

    res.innerHTML = "Result";
    CompText.innerHTML = "Computer's Move"
    btn.style.display = "none";

  
}
)
    



