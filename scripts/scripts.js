"use strict"
import anime from '/scripts/libs/node_modules/animejs/lib/anime.es.js';

//анимация слайдера
let warlock=document.getElementById(`warlock`);
let hunter=document.getElementById(`hunter`);
let titan=document.getElementById(`titan`);

let is_anim=false;
//
// function warlock_active() {
//     warlock.style.clipPath = `polygon(0% 0%, 80% 0%, 70% 100%, 0% 100%)`;
//     hunter.style.clipPath = 'polygon(80% 0%, 95% 0%, 85% 100%, 70% 100%)';
//     titan.style.removeProperty('clip-path');
// }
// function titan_active() {
//     titan.style.clipPath=`polygon(30% 0%, 100% 0%, 100% 100%, 20% 100%)`;
//     hunter.style.clipPath='polygon(15% 0%, 30% 0%, 20% 100%, 5% 100%)';
//     warlock.style.removeProperty('clip-path');
// }
//
// function hunter_active() {
//     hunter.style.clipPath=`polygon(15% 0%, 95% 0%, 85% 100%, 5% 100%)`;
//     warlock.style.clipPath=' polygon(0% 0%, 15% 0%, 5% 100%, 0% 100%)';
//     titan.style.clipPath='polygon(95% 0%, 100% 0%, 100% 100%, 85% 100%)';
// }
function warlock_active() {
    anime({
        targets: warlock,
        clipPath: `polygon(0% 0%, 80% 0%, 70% 100%, 0% 100%)`,
        zIndex:[2,2],
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
        // titan_active();

        setTimeout(function () {
            is_anim=false;
        },150)
    }
})

hunter.addEventListener("click",function () {
    if (!is_anim) {
        is_anim=true;
       // hunter_active();

        setTimeout(function () {
            is_anim=false;
        },150)

    }
})
