const countdown = () => {
    //get the destinationdate and convert the value to milliseconds
    const destinationDate = new Date("24 Sep, 2022 00:00:00").getTime();

    //get the current date and convert the value to milliseconds
    const now = new Date().getTime();

    //calculate the gap between now and the destination
    const gap = destinationDate - now;

    //how milliseconds are equivalent to 1 second, seconds to minutes, minutes to hours, hours to days....
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating the value, to know exactly how many days, hours, minutes and seconds are left to reach the target date
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.days').textContent = textDay;
    document.querySelector('.hours').textContent = textHour;
    document.querySelector('.minutes').textContent = textMinute;
    document.querySelector('.seconds').textContent = textSecond;
}

setInterval(countdown, 1000);

const modal = document.querySelector('.modal-wrapper');
const button = document.querySelector('#openModal');
const close = document.querySelector('.close');

function openAndCloseModal() {
    button.addEventListener('click', () => {
        modal.classList.remove('invisible');
    });
    
    close.addEventListener('click', () => {
        modal.classList.add('invisible');
    });   
}

openAndCloseModal();