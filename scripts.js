// Write your JavaScript code here.
// Remember to pay attention to page loading!

const button1 = document.getElementById('takeoff');
const button2 = document.getElementById('landing');
const button3 = document.getElementById('missionAbort');
const fStatus = document.getElementById('flightStatus');
const height = document.getElementById('spaceShuttleHeight');
const shuttleBg = document.getElementById('shuttleBackground');
const ship = document.getElementById('rocket');
const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('right');
const right = document.getElementById('left');
let altitude = 0;
let rocketUp = 0;
let rocketLeft = 0;

button1.addEventListener('click', event =>{
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (response){
       fStatus.innerHTML = 'Shuttle in flight.';
       shuttleBg.style.backgroundColor= 'blue';
       altitude += 10000
       rocketUp -= 10
       ship.style.marginTop = rocketUp+'px';
       height.innerHTML = altitude;    
    }
});

button2.addEventListener('click', event =>{
    window.alert('The shuttle is landing. Landing gear engaged.');
       fStatus.innerHTML = 'The shuttle has landed.';
       shuttleBg.style.backgroundColor= 'green';
       height.innerHTML = 0;    
       ship.style.marginTop = 0;
       ship.style.marginLeft = 0;
});

button3.addEventListener('click', event =>{
    let abort = window.confirm('Confirm that you want to abort the mission.');
       if (abort){
        fStatus.innerHTML = 'Mission aborted.';
       shuttleBg.style.backgroundColor= 'green';
       height.innerHTML = 0; 
       ship.style.marginTop = 0;
       ship.style.marginLeft = 0;   
       }
});

up.addEventListener('click', event => {   
    rocketUp -= 10
    ship.style.marginTop = rocketUp+'px';
    altitude += 10000;
    height.innerHTML = altitude;  
});

down.addEventListener('click', event => {   
    rocketUp += 10;
    ship.style.marginTop = rocketUp + 'px';
    altitude -= 10000;
    height.innerHTML = altitude;  
});

left.addEventListener('click', event => {   
    rocketLeft += 10;
    ship.style.marginLeft = rocketLeft + 'px'; 
});

right.addEventListener('click', event => {   
    rocketLeft -= 10;
    ship.style.marginLeft = rocketLeft + 'px';
});
