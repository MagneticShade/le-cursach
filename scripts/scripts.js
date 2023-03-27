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
VanillaTilt.init(document.querySelectorAll('.card'),{
    glare:true,
    reverse:true,
    "max-glare":0.2,
    scale:1.1,
});


// console.log( await fetch('https://www.bungie.net/platform/Destiny/Manifest/DestinyLoreDefinition/9250512/',{
//     headers:{ 'X-API-Key':'6be74b820d6f473d906ce82516d03b90'}
//
// }).then(response=>{return response.json()}));


//waypoint тест, анимации появления слайдера
// var waypoint = new Waypoint({
//     element: document.getElementById('slide3'),
//     handler: function() {
//      console.log('Basic waypoint triggered')
//     },
//     context: document.getElementById('horizontal_scroller'),
//     offset:'5%',
//     horizontal: true
//   })
//   let waypoint1=new Waypoint({
//     element:document.getElementById(`horizontal_scroller`),
//     handler:function(){
//         anime({
//             targets:'.slide',
//             translateY: [-30,0],
//             opacity: [0,1],
//             easing: 'linear',
//             duration:1000
//         })
//         waypoint1.destroy()
//     },
//     offset:"50%"
//   })

let slide1=new Waypoint({
    element:document.getElementById(`horizontal_scroller`),
    handler:function(){
        anime({
            targets:'#bookmarks_sl1',
            translateX: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#header_sl1',
            translateY: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl1',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl1',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#sub_header_sl1',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#filling_sl1',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#button_sl1',
            translateY: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        this.destroy()
    },
    offset:"90%"
});

let slide2 = new Waypoint({
    element: document.getElementById('slide2'),
    handler: function() {
        anime({
            targets:'#bookmarks_sl2',
            translateX: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#header_sl2',
            translateY: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl2',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl2',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#sub_header_sl2',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#filling_sl2',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#button_sl2',
            translateY: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        this.destroy()
    },
    context: document.getElementById('horizontal_scroller'),
    offset:'5%',
    horizontal: true
});

let slide3 = new Waypoint({
    element: document.getElementById('slide3'),
    handler: function() {
        anime({
            targets:'#bookmarks_sl3',
            translateX: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#header_sl3',
            translateY: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl3',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl3',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#sub_header_sl3',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#filling_sl3',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#button_sl3',
            translateY: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        this.destroy()
    },
    context: document.getElementById('horizontal_scroller'),
    offset:'5%',
    horizontal: true
});

let slide4 = new Waypoint({
    element: document.getElementById('slide4'),
    handler: function() {
        anime({
            targets:'#bookmarks_sl4',
            translateX: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#header_sl4',
            translateY: [-300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl4',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#img_sl4',
            translateX: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        anime({
            targets:'#sub_header_sl4',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#filling_sl4',
            opacity: [0,1],
            easing: 'linear',
            duration:700
        })
        anime({
            targets:'#button_sl4',
            translateY: [300,0],
            opacity: [0,1],
            easing: 'linear',
            duration:500
        })
        this.destroy()
    },
    context: document.getElementById('horizontal_scroller'),
    offset:'10%',
    horizontal: true
});

let lore=( await fetch('https://www.bungie.net/common/destiny2_content/json/ru/DestinyLoreDefinition-88e2ca87-7551-4503-a5b5-2527c4531503.json',{
}).then(response=>{return response.json()}));

let lore_books=await fetch('https://www.bungie.net/common/destiny2_content/json/ru/DestinyPresentationNodeDefinition-88e2ca87-7551-4503-a5b5-2527c4531503.json',{
}).then(response=>{return response.json()});
console.log(lore_books[3303363217])




// card.style.backgroundImage=`url("https://www.bungie.net"${cayde['4003550471']['displayProperties']['iconSequences']['1']['frames']['0']})`;


function getImage(id){
    return `https://www.bungie.net${lore_books[id]['displayProperties']['iconSequences']['1']['frames']['0']}`
}


let card=document.getElementById('card1');
let card2=document.getElementById('card2');
let card3=document.getElementById('card3');
let card4=document.getElementById('card4');
let card5=document.getElementById('card5');
let card6=document.getElementById('card6');

card.style.backgroundImage=`url(${getImage('4003550471')})`
card2.style.backgroundImage=`url(${getImage('3303363217')})`
card3.style.backgroundImage=`url(${getImage('28665996')})`
card4.style.backgroundImage=`url(${getImage('2436418635')})`
card5.style.backgroundImage=`url(${getImage('1960700009')})`
card6.style.backgroundImage=`url(${getImage('3747262457')})`

function getName(id) {
    return lore_books[id]['displayProperties']['name'];
}
let tag1=document.getElementById('tag1');
let tag2=document.getElementById('tag2');
let tag3=document.getElementById('tag3');
let tag4=document.getElementById('tag4');
let tag5=document.getElementById('tag5');
let tag6=document.getElementById('tag6');

tag1.textContent=getName('4003550471');
tag2.textContent=getName('3303363217');
tag3.textContent=getName('28665996');
tag4.textContent=getName('2436418635');
tag5.textContent=getName('1960700009');
tag6.textContent=getName('3747262457');

// console.log( await fetch('https://www.bungie.net/common/destiny2_content/json/ru/DestinyLoreDefinition-88e2ca87-7551-4503-a5b5-2527c4531503.json',{
//     headers:{ 'X-API-Key':'6be74b820d6f473d906ce82516d03b90'}

// }).then(response=>{return response.json()}));


//вход и регистрация
let log_trigger=document.getElementById('account');
let log_window=document.getElementById('login');

function closeModal() {
    log_window.close();
    document.querySelector("body").classList.remove("scroll_lock");
}
function openModalAndLockScroll() {
    log_window.showModal();
    document.querySelector("body").classList.add("scroll_lock");
}
function closeOnBackDropClick({ currentTarget, target }) {

    let dialogElement = currentTarget;
    let isClickedOnBackDrop = target === log_window;
    if (isClickedOnBackDrop) {
        document.body.classList.remove("scroll_lock");
        dialogElement.close();
    }
}

log_trigger.addEventListener('click',openModalAndLockScroll);
document.getElementById('close').addEventListener('click',closeModal);
log_window.addEventListener("click", closeOnBackDropClick);

document.getElementById('form_login').addEventListener('change',function () {
    if (document.getElementById('log').value!=''&&document.getElementById('pas').value!='') {

        document.getElementById('log_btn').disabled = false;
        document.getElementById('log_btn').classList.remove('btn_disabled');
    }
})
let transition1;
let transition2;
let timeline1=anime.timeline({
    easing:'easeOutExpo',
});

let timeline2=anime.timeline({
    easing:'easeOutExpo',
});

let reg_form_obj=document.querySelectorAll('#form_reg>*');

document.getElementById('redir_btn').addEventListener('click',function(){
   anime({
        targets:reg_form_obj,
        translateX:[-200,0],
        begin: function(anim) {
            document.getElementById('form_login').classList.toggle('hidden');
            document.getElementById('form_reg').classList.toggle('hidden');
       },
    });
})
document.getElementById('back').addEventListener('click',function () {
    let tmp=document.querySelectorAll('#form_login>*');
    anime({
        targets:tmp,
        translateY:[-200,0],
        begin: function(anim) {
            document.getElementById('form_login').classList.toggle('hidden');
            document.getElementById('form_reg').classList.toggle('hidden');
        },
    });
});
document.getElementById('form_reg').addEventListener('submit',async function (event) {
    event.preventDefault();
    await fetch('./php/handler.php',{
        method:'POST',
        body:new FormData(document.getElementById('form_reg'))
    }).then(response=>{
        return response.text()
    }).then(text=>{
        console.log(text);
    })
})