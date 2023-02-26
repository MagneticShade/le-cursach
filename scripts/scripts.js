"use strict"

//таймер
let timer=document.getElementById(`timer`)
let timer_field=document.getElementById(`timer_field`);
let prom_end=new Date(2023,12,31);

function zero(num) {
    if (num<=9){
        return `0${num}`;
    }
    else {
        return num;
    }
}

let time=setInterval(function () {

    let cur_date = new Date;
    let dif = prom_end.getTime() - cur_date.getTime();

    if (dif <= 0) {
        timer.remove();
        clearInterval(time);
    } else {
        let days = Math.floor(dif / 86400000);
        let hours = Math.floor((dif % 86400000) / (1000 * 60 * 60));
        let minutes = Math.floor(((dif % 86400000) % (1000 * 60 * 60)) / (60000));
        let seconds = Math.floor((((dif % 86400000) % (1000 * 60 * 60)) % (60000)) / 1000);
        timer_field.textContent = `${zero(days)}:${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    }
})
//Прыгающий Призрак
    anime({
        targets:'#next_screen',
        translateY: -25,
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration:2000
    });

//анимация слайдера
let warlock=document.getElementById(`warlock`);
let hunter=document.getElementById(`hunter`);
let titan=document.getElementById(`titan`);

let is_anim=false;

function warlock_active() {
    anime({
        targets: warlock,
        clipPath: `polygon(0% 0%, 80% 0%, 70% 100%, 0% 100%)`,
        easing: 'linear',
        duration:150
    });
    anime({
        targets: hunter,
        clipPath: `polygon(80% 0%, 95% 0%, 85% 100%, 70% 100%)`,
        easing: 'linear',
        duration:150
    });
    anime({
        targets: titan,
        clipPath: `polygon(95% 0%, 100% 0%, 100% 100%, 85% 100%)`,
        easing: 'linear',
        duration:150
    })

}
function hunter_active() {
    anime({
        targets: hunter,
        clipPath: `polygon(15% 0%, 95% 0%, 85% 100%, 5% 100%)`,
        easing: 'linear',
        duration:150
    });
    anime({
        targets: warlock,
        clipPath: ` polygon(0% 0%, 15% 0%, 5% 100%, 0% 100%)`,
        easing: 'linear',
        duration:150
    });
    anime({
        targets: titan,
        clipPath: `polygon(95% 0%, 100% 0%, 100% 100%, 85% 100%)`,
        easing: 'linear',
        duration:150
    })
}
function titan_active() {
    anime({
        targets: titan,
        clipPath: `polygon(30% 0%, 100% 0%, 100% 100%, 20% 100%)`,
        easing: 'linear',
        duration:150
    })
    anime({
        targets: hunter,
        clipPath: `polygon(15% 0%, 30% 0%, 20% 100%, 5% 100%)`,
        easing: 'linear',
        duration:150
    });
    anime({
        targets: warlock,
        clipPath: `polygon(0% 0%, 15% 0%, 5% 100%, 0% 100%)`,
        easing: 'linear',
        duration:150
    });

}
warlock.addEventListener("click", function () {

    if (!is_anim) {
        is_anim=true;
        warlock_active();


        setTimeout(function () {
            is_anim=false;
        },150)
    }
})

titan.addEventListener("click",function () {
    if (!is_anim) {
        is_anim=true;
        titan_active();

        setTimeout(function () {
            is_anim=false;
        },150)
    }
})

hunter.addEventListener("click",function () {
    if (!is_anim) {
        is_anim=true;
       hunter_active();

        setTimeout(function () {
            is_anim=false;
        },150)

    }
})
