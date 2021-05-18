const time = document.getElementById('time'), 
greeting = document.getElementById('greeting'), 
name = document.getElementById('name'), 
focus = document.getElementById('focus');

//Show Time

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes();

    //Set AM or PM

    const amPm = hour >= 12 ? 'PM': 'AM';

    //12 hour format

    hour = hour % 12 || 12;

    // Output time

    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//Add zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

// Set BG

function setBg(){
    let today = new Date(),
        hours = today.getHours();

    if (hours < 12) {
        //Morning
        document.body.style.backgroundImage = "url(../imgs/morning_dew.jpg)";
        greeting.textContent = 'Good Morning';
    } else if ( hours < 20) {
        //Afternoon
        document.body.style.backgroundImage = "url(../imgs/hills.jpg)";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        //Night
        document.body.style.backgroundImage = "url(../imgs/night.jpg)";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

//Get name
function getName() {
    if (localStorage.getItem('name') === null){
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Run 
showTime();
setBg();
getName();