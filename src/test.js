const content = `
.onePunchMan * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
.onePunchMan *::before ::after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body {
    background: #e9c066;
  }
  .onePunchMan {
    position: relative;
  }
  .face {
    width: 320px;
    height: 500px;
    left: 50%;
    top: 20px;
    position: absolute;
    position: relative;
    margin-left: -300px;
    z-index: 0;
  }
  .light {
    width: 300px;
    z-index: 2;
    position: absolute;
    transform: translate(-70px);
    top: -50px;
    display: none;
  }
  .face:hover > .light {
    display: block;
  }
  .face .yuan1 {
    position: absolute;
    width: 320px;
    height: 350px;
    border-radius: 50%;
    background: #f7ceb0;
    overflow: hidden;
    z-index: 1;
  }
  .face .yuan2 {
    position: absolute;
    width: 300px;
    height: 400px;
    border-radius: 150px/200px;
    bottom: 30px;
    background: #f7ceb0;
    transform: translate(10px);
    z-index: 1;
  }
  .face .fang {
    position: absolute;
    width: 320px;
    height: 15px;
    border-top: 130px solid #f7ceb0;
    border-left: 14px solid transparent;
    border-right: 14.5px solid transparent;
  
    transform: translateY(185px);
    z-index: 1;
  }
  .eyesLeft {
    border: 4px solid black;
    width: 100px;
    height: 55px;
    position: relative;
    position: absolute;
    left: 25%;
    z-index: 1;
    top: 200px;
    margin-left: -50px;
    border-radius: 40% 40% 50% 50%;
    background: white;
  }
  @keyframes move {
    0% {
      transform: translate(0px);
    }
    25% {
      transform: translate(33px);
    }
    80% {
      transform: translate(-35px);
    }
    100% {
      transform: translate(0px);
    }
  }
  .eyes:hover > .eyeballs {
    animation: move 2s infinite linear;
  }
  .eyeballs {
    position: absolute;
    position: relative;
    top: 215px;
    width: 15px;
    height: 15px;
    z-index: 1;
    left: 50%;
    margin-left: -7.5px;
  }
  .eyeballs .leftEyeball {
    position: absolute;
    border: 5px solid black;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transform: translate(-75px);
    background-color: black;
    z-index: 1;
  }
  .eyeballs .rightEyeball {
    position: absolute;
    border: 1px solid black;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transform: translate(75px);
    background-color: black;
    z-index: 1;
  }
  .eyesRight {
    border: 4px solid black;
    width: 100px;
    height: 55px;
    position: relative;
    position: absolute;
    left: 75%;
    z-index: 1;
    top: 200px;
    margin-left: -50px;
    border-radius: 40% 40% 50% 50%;
    background: white;
  }
  .leftEyebrows {
    position: absolute;
    border: 4px solid black;
    width: 110px;
    height: 30px;
    z-index: 1;
    left: 23%;
    top: 180px;
    margin-left: -50px;
    border-radius: 50% 50% 0 0;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  .rightEyebrows {
    position: absolute;
    border: 4px solid black;
    width: 110px;
    height: 30px;
    z-index: 1;
    left: 74%;
    top: 180px;
    margin-left: -50px;
    border-radius: 50% 50% 0 0;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  .nose .straight {
    position: absolute;
    border: 5px solid black;
    width: 100px;
    height: 15px;
    z-index: 3;
    top: 278px;
    left: 30%;
    border-radius: 50% 50% 0% 0%;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(95deg);
  }
  .nose .oval {
    position: absolute;
    border: black 4px solid;
    width: 25px;
    height: 25px;
    top: 319px;
    z-index: 3;
    left: 45%;
    border-radius: 20px/15px;
    border-right-color: transparent;
    border-top-color: transparent;
    transform: rotate(-10deg);
  }
  .mouth .oval1 {
    width: 80px;
    height: 100px;
    z-index: 1;
    position: absolute;
    bottom: 100px;
    left: 52%;
    margin-left: -50px;
    border-radius: 80px/100px;
    background: #ed6157;
  }
  .mouth .oval2 {
    width: 160px;
    height: 80px;
    z-index: 2;
    position: absolute;
    bottom: 125px;
    left: 40%;
    margin-left: -80px;
    border-radius: 0% 0% 50% 50%;
    background: #f7ceb0;
  }
  
`
const demo1 = document.querySelector('#demo1')
const demo2 = document.querySelector('#demo2')
let n =1
let time = 100
let timeMachine
const player = {
    init:()=>{
        demo1.innerText = content.substr(0,n)
        demo2.innerHTML = content.substr(0,n)
        player.play()
        player.bindEvent()
    },
    hashmap :{
        '#btnStop': 'pause',
        '#btnPlay':'play' ,
        '#btnFast': 'fast',
        '#btnSlow': 'slow',
        '#btnNormal':'normal'
        },
    bindEvent: ()=>{
        
        for(let key in player.hashmap){
            if(player.hashmap.hasOwnProperty(key)){
            const value = player.hashmap[key]
            document.querySelector(key).onclick = player[value]
            }
            
        }
    },
    x:() =>{
        n+=1
        if(n>content.length){
            window.clearInterval(timeMachine)
            return
        }
        demo1.innerText = content.substr(0,n)
        demo2.innerHTML = content.substr(0,n)
        demo1.scrollTop = demo1.scrollHeight
    },  
    play : ()=>{
        timeMachine = setInterval(player.x,time)
},  
    pause : () =>{
    window.clearInterval(timeMachine)},
    slow : ()=>{ 
        player.pause()
        time = 200
        player.play()},
    fast : ()=>{
    player.pause()
    time = 0
    player.play()
},
    normal : () =>{
    player.ause()
    time = 100
    player.play()
},

}
player.init()
