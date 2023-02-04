"use strict"
//анимация слайдера
let warlock=document.getElementById(`warlock`);
let hunter=document.getElementById(`hunter`);
let titan=document.getElementById(`titan`);

warlock.addEventListener("mouseover", function () {
    warlock.style.zIndex='2';
    warlock.style.clipPath=`polygon(0% 0%, 70% 0%, 55% 100%, 0% 100%)`;
    hunter.style.clipPath='polygon(70% 0%, 90% 0%, 75% 100%, 55% 100%)';
})
warlock.addEventListener("mouseout",function () {
    warlock.style.removeProperty('z-index');
    warlock.style.removeProperty(`clip-path`);
    hunter.style.removeProperty('clip-path')
})
titan.addEventListener("mouseover",function () {
    titan.style.zIndex='2';
    titan.style.clipPath=`polygon(55% 0%, 100% 0%, 100% 100%, 40% 100%)`;
    hunter.style.clipPath='polygon(25% 0%, 55% 0%, 40% 100%, 10% 100%)';
})
titan.addEventListener("mouseout",function () {
    titan.style.removeProperty('z-index');
    titan.style.removeProperty(`clip-path`);
    hunter.style.removeProperty('clip-path')
})
hunter.addEventListener("mouseover",function () {
    hunter.style.zIndex='2';
    hunter.style.clipPath=`polygon(25% 0%, 90% 0%, 75% 100%, 10% 100%)`;
    warlock.style.clipPath=' polygon(0% 0%, 25% 0%, 10% 100%, 0% 100%)';
    titan.style.clipPath='polygon(90% 0%, 100% 0%, 100% 100%, 75% 100%)';
})