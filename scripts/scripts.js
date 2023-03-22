"use strict"
import VanillaTilt from '/scripts/libs/node_modules/vanilla-tilt/lib/vanilla-tilt.es2015.js';
import anime from '/scripts/libs/node_modules/animejs/lib/anime.es.js';

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

//Предзаказ
let passive=anime({
    targets:'#order',
    outlineOffset:"20px",
    outlineColor:"rgba(215, 194, 24, 0.0)",
    direction: 'alternative',
    loop:true,
    // endDelay: 500,
    easing:'linear',
});
let btn=document.getElementById('order');
btn.addEventListener('mouseover',function () {
    passive.pause();
    btn.style.outlineColor="rgba(215, 194, 24, 0.0)";
let active=anime({
   targets:'#order',
    outlineColor:"rgba(215, 194, 24, 0.8)",
   outlineOffset:"10",
    easing:"linear",
    duration:300,

});


})
btn.addEventListener('mouseout',function () {
    passive.play();
})
// вторичный предзаказ
document.getElementById('sub_order').addEventListener('mouseover',function () {
    anime({
        targets:"#sub_order",
        backgroundColor:"rgba(215, 194, 24, 0.8)",
        easing:'linear',
        duration:300,
    })
})
document.getElementById('sub_order').addEventListener("mouseout", function () {
    anime({
        targets:"#sub_order",
        backgroundColor:"rgba(215, 194, 24, 0.0)",
        easing:'linear',
        duration:300,
    })
})
//Прыгающий Призрак
    anime({
        targets:'#next_screen',
        translateY: [90,30],
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration:2000
    });
// горизонтальный скрол

const element = document.querySelector("#horizontal_scroller");
    element.addEventListener('wheel', (event) => {
        event.preventDefault();
        element.scrollBy({
            behavior: "smooth",
            left: event.deltaY < 0 ? -30 : 30,
        });
    });
    
//ухватится за слайд
// const slider=document.querySelector('#horizontal_scroller');
// let isDown = false;
// let startX;
// let scrollLeft;
//
// slider.addEventListener("mousedown", e => {
//     isDown = true;
//     slider.classList.add("active");
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//     slider.style.scrollSnapType='none'
// });
// slider.addEventListener("mouseleave", () => {
//     isDown = false;
//     slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//     isDown = false;
//     slider.classList.remove("active");
//     slider.style.removeProperty('scroll-snap-type');
// });
// slider.addEventListener("mousemove", e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = x - startX;
//     slider.scrollLeft = scrollLeft - walk;
// });

//карточки,тильт
VanillaTilt.init(document.querySelectorAll('.card'));


// console.log( await fetch('https://www.bungie.net/platform/Destiny/Manifest/DestinyLoreDefinition/9250512/',{
//     headers:{ 'X-API-Key':'6be74b820d6f473d906ce82516d03b90'}
//
// }).then(response=>{return response.json()}));










