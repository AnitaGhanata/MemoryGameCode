const time= document.querySelector('h1');

let timeSecond = 5 ;
time.innerHTML = `00:${timeSecond}`;
displayTime(timeSecond)

const countDown = setInterval(() =>{
    timeSecond--;
    
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
         endTime();
        clearInterval(countDown);
    }
},1000);
    function displayTime(second){
        const minutes = Math.floor(second / 60);
        const seconds = Math.floor(second % 60);


        time.innerHTML = `${minutes<1 ? '0':''}${minutes}:${seconds<1 ? '0':''}${seconds}`;
     
    }
    function endTime(){
       location.assign("http://127.0.0.1:5500/mainPage.html");
    }

    
       
    

