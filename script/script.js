let timer = document.querySelector("#countdown");
let text = document.querySelector("#text");

let count = 10;
let x = () => {
    timer.textContent = count
    setTimeout(() => {
        timer.textContent = count--;
        setTimeout(()=>{
            timer.textContent=count--;
            setTimeout(()=>{
                timer.textContent=count--;
                setTimeout(()=>{
                    timer.textContent=count--;        
                    setTimeout(()=>{
                        timer.textContent=count--;          
                        setTimeout(()=>{
                            timer.textContent=count--;               
                            setTimeout(()=>{
                                timer.textContent=count--;                  
                                setTimeout(()=>{
                                    timer.textContent=count--;                   
                                    setTimeout(()=>{
                                      timer.textContent=count--;                           
                                        setTimeout(()=>{
                                            timer.textContent=count--;                                
                                            setTimeout(()=>{
                                                timer.style.display="none";
                                                text.style.display="block";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
x(count);
