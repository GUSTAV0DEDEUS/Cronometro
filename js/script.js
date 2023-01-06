var sec = 0
var min = 0
var hour = 0
var interval

function start(){
    interval = setInterval(timer,1000)
}
function pause(){
   clearInterval(interval)
}
function stop(){
  clearInterval(interval)
  sec=0
  min=0
  hour=0
  document.getElementById('timer').innerText="00:00:00"
}

function timer(){
  sec++
  if(sec==60){
    min++
    sec=0
  }
  if(min==60){
    hour++
    min=0
  }
  document.getElementById('timer').innerText=`0${hour} : ${min} : ${sec}`;
}