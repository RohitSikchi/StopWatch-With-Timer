const incElem=document.getElementById("increment");
const displayElem=document.querySelector(".display");
let Count=0;
var intervalId;


        const startCount = () => {
             intervalId = setInterval(() => {
                incElem.innerText = Count++;
            }, 1000);
        };

        const stopTimer = () => {
            showStopValue();
            clearInterval(intervalId);
        };

    const resetTimer = () => {
        Count = 0;
        incElem.innerText = Count;
        clearInterval(intervalId);
    };
    const showStopValue = () => {
          const newPara = document.createElement("p");
          newPara.innerText = `The stop time is ${Count - 1}`;
          displayElem.append(newPara);
    };
    const clearTimeValue = () => {
      displayElem.innerHTML = "";
    };
        
document.querySelector(".startBtn").addEventListener("click",startCount);
document.querySelector(".resetBtn").addEventListener("click",resetTimer);
document.querySelector(".stopBtn").addEventListener("click",stopTimer);
document.querySelector(".getTimeBtn").addEventListener("click",showStopValue);
document.querySelector(".clearBtn").addEventListener("click",clearTimeValue);
