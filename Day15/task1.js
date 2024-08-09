const counterEle = document.querySelector(".counter");
const bodyEle = document.querySelector("body");

const gradients = [
  "linear-gradient(to right , #1beeff, #d0fe9f )",
  "linear-gradient(to left , #38edff , #d0fe9f )",
  "linear-gradient(to right , #55ecff , #d0fe9f )",
  "linear-gradient(to left, #72ebff , #d0fe9f )",
  "linear-gradient(to right , #8febff , #d0fe9f )",
  "linear-gradient(to left, #abebff , #d0fe9f )",
  "linear-gradient(to right , #c8ebff , #d0fe9f )",
  "linear-gradient(to left, #e5ebff , #d0fe9f )",
  "linear-gradient(to right , #ffffee , #d0fe9f )",
  "linear-gradient(to left, #fffedd , #d0fe9f )",
  "linear-gradient(to right ,#fffeee , #d0fe9f )",
];

setTimeout(() => {
  counterEle.innerText = 10;
  bodyEle.style.background = gradients[10];

  setTimeout(() => {
    counterEle.innerText = 9;
    bodyEle.style.background = gradients[9];

    setTimeout(() => {
      counterEle.innerText = 8;
      bodyEle.style.background = gradients[8];

      setTimeout(() => {
        counterEle.innerText = 7;
        bodyEle.style.background = gradients[7];

        setTimeout(() => {
          counterEle.innerText = 6;
          bodyEle.style.background = gradients[6];

          setTimeout(() => {
            counterEle.innerText = 5;
            bodyEle.style.background = gradients[5];

            setTimeout(() => {
              counterEle.innerText = 4;
              bodyEle.style.background = gradients[4];

              setTimeout(() => {
                counterEle.innerText = 3;
                bodyEle.style.background = gradients[3];

                setTimeout(() => {
                  counterEle.innerText = 2;
                  bodyEle.style.background = gradients[2];

                  setTimeout(() => {
                    counterEle.innerText = 1;
                    bodyEle.style.background = gradients[1];

                    setTimeout(() => {
                      counterEle.classList.add("zoom");
                      counterEle.innerText = "Happy Indepence Day";
                      counterEle.style.color = "#FFF";
                      counterEle.style.textShadow =
                        "2px 2px 4px rgba(0,0,0,0.5)";
                      bodyEle.style.background = gradients[0];
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);