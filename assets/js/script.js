window.addEventListener('load', () => {
    const DEG = 6;
    let dHour = document.querySelector('#hour');
    let dMinute = document.querySelector('#minute');
    let dSecond = document.querySelector('#second');
    let dDisplay = document.querySelector('#display');
    let dPoints = document.querySelectorAll('.points');
    let rangeSeconds = new Array(5,10,20,25,35,40,50,55);

    rangeSeconds.forEach((elem, index) => {
        let date = new Date;
        if(date.getSeconds() >= elem)
            dPoints[index].style.backgroundColor = 'var(--clock-number)';
    });

    const getZero = num => (num < 10 ? '0' : '' ) + num;
    const clockTurnOn = () => {
        let date = new Date;
        let minute = date.getMinutes() * DEG;
        let hour = date.getHours() * 30 + minute / 12;
        let str = `${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}`;
        if (date.getSeconds() % 2 != 0)
            str = str.split(':').join(' ');
        if(date.getSeconds() == 0){
            dPoints.forEach(elem => {
                elem.style.backgroundColor = 'var(--clock-indicator)';
            });
        }else{
            rangeSeconds.forEach((elem, index) => {
                if(date.getSeconds() == elem)
                    dPoints[index].style.backgroundColor = 'var(--clock-number)';
            });
        }
        dHour.style.transform = `rotate(${hour}deg)`;
        dMinute.style.transform = `rotate(${minute}deg)`;
        dSecond.style.transform = `rotate(${date.getSeconds() * DEG}deg)`;
        dDisplay.innerHTML = str;
    }
    clockTurnOn();
    setInterval(clockTurnOn, 1000);
});