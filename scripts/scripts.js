"use strict"
import VanillaTilt from '/scripts/libs/node_modules/vanilla-tilt/lib/vanilla-tilt.es2015.js';
import anime from '/scripts/libs/node_modules/animejs/lib/anime.es.js';

async function check_login() {

    let broke=false;
    await fetch('../php/startup.php').then(response=>{
        return response.json();
    }).then(json=>{
        let name=document.createElement('p');
        name.textContent=json['user_name'];
        document.querySelector('.account>img').src=json['avatar_url'];
        document.querySelector('.account').appendChild(name);
    }).catch(e=>{
        let passive=anime({
            targets:'#join_us_button',
            outlineOffset:"20px",
            outlineColor:"rgba(215, 194, 24, 0.0)",
            direction: 'alternative',
            loop:true,
            easing:'linear',
        });
        let btn=document.getElementById('join_us_button');
        btn.addEventListener('mouseover',function () {
            passive.pause();
            btn.style.outlineColor = "rgba(215, 194, 24, 0.0)";
            let active = anime({
                targets: '#join_us_button',
                outlineColor: "rgba(215, 194, 24, 0.8)",
                outlineOffset: "10",
                easing: "linear",
                duration: 300,

            });
        })
        btn.addEventListener('mouseout',function () {
            passive.play();
        })
            document.getElementById('join_us_button').addEventListener('click',openModalAndLockScroll);
        log_trigger.addEventListener('click',openModalAndLockScroll);
        broke=true;
    });
    if (!broke){
        document.getElementById('join_us').remove();
        log_trigger.addEventListener('click',SessionDestroy);
        log_trigger.removeEventListener('click',openModalAndLockScroll);
    }

}
let log_trigger=document.querySelector('.account');
check_login();
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

let element = document.querySelector("#horizontal_scroller");
    element.addEventListener('wheel', (event) => {
        event.preventDefault();
        element.scrollBy({
            behavior: "smooth",
            left: event.deltaY < 0 ? -30 : 30,
        });
    });


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

//карточки,тильт bungieApi
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




let book_array=['2637550529','3303363217','158956081','2436418635','1960700009','3747262457']
let manifest=(await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/',{}
).then(response=>{return response.json()}))
console.log()
let lore=( await fetch('https://www.bungie.net'+manifest['Response']['jsonWorldComponentContentPaths']['ru']['DestinyLoreDefinition']
).then(response=>{return response.json()}));

let lore_definition=( await fetch('https://www.bungie.net'+manifest['Response']['jsonWorldComponentContentPaths']['ru']['DestinyRecordDefinition']
).then(response=>{return response.json()}));
let lore_books=await fetch('https://www.bungie.net'+manifest['Response']['jsonWorldComponentContentPaths']['ru']['DestinyPresentationNodeDefinition']
    ).then(response=>{return response.json()});



function OpenLore(bookId) {
    document.getElementById('lore_name').textContent=getName(bookId);
    document.getElementById('lore_content').innerText=lore[lore_definition[lore_books[bookId]["children"]['records']['0']['recordHash']]['loreHash']]['displayProperties']['description'];
}
let reader=document.getElementById('reader')

function closeReader() {
    reader.close();
    document.querySelector("body").classList.remove("scroll_lock");
}
document.getElementById('close_reader').addEventListener('click',closeReader);

function openReaderAndLockScroll(bookId) {
    OpenLore(bookId);
    reader.showModal();
    document.querySelector("body").classList.add("scroll_lock");
}
function closeReaderOnBackDropClick({ currentTarget, target }) {

    let dialogElement = currentTarget;
    let isClickedOnBackDrop = target === reader;
    if (isClickedOnBackDrop) {
        document.body.classList.remove("scroll_lock");
        dialogElement.close();
    }
}
reader.addEventListener("click", closeReaderOnBackDropClick);


function getName(id) {
    return lore_books[id]['displayProperties']['name'];
}
function getImage(id){
    return `https://www.bungie.net${lore_books[id]['displayProperties']['iconSequences']['1']['frames']['0']}`
}

let cards=document.querySelectorAll('.card')
let tags=document.querySelectorAll('.tag');
for (let i =0;i<6;i++){
    cards[i].style.backgroundImage=`url(${getImage( book_array[i])})`;
    tags[i].textContent=getName(book_array[i]);
    cards[i].addEventListener('click',function () {
        openReaderAndLockScroll(book_array[i]);
    })

}


// console.log( await fetch('https://www.bungie.net/common/destiny2_content/json/ru/DestinyLoreDefinition-88e2ca87-7551-4503-a5b5-2527c4531503.json',{
//     headers:{ 'X-API-Key':'6be74b820d6f473d906ce82516d03b90'}

// }).then(response=>{return response.json()}));


//окно с ошибкой
let error_window=document.getElementById('error');
function closeError() {
    error_window.close();
}

function ShowErrorAndLockScroll() {
    error_window.showModal();
    document.querySelector("body").classList.add("scroll_lock");
}

function closeErrorOnBackDropClick({ currentTarget, target }) {

    let dialogElement = currentTarget;
    let isClickedOnBackDrop = target === error_window;
    if (isClickedOnBackDrop) {
        dialogElement.close();
    }
}

document.getElementById('closeError').addEventListener('click',closeError);
error_window.addEventListener('click',closeErrorOnBackDropClick)

//вход и регистрация

let log_window=document.getElementById('login');

let form_login=document.getElementById('form_login');
let form_reg=document.getElementById('form_reg');
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


document.getElementById('close').addEventListener('click',closeModal);
log_window.addEventListener("click", closeOnBackDropClick);



form_login.addEventListener('change',function () {
    if (document.getElementById('log').value!=''&&document.getElementById('pas').value!='') {

        document.getElementById('log_btn').disabled = false;
        document.getElementById('log_btn').classList.remove('btn_disabled');
    }
})

let reg_form_obj=document.querySelectorAll('#form_reg>*');

document.getElementById('redir_btn').addEventListener('click',function(){
   anime({
        targets:reg_form_obj,
        translateX:[-200,0],
        begin: function(anim) {
            form_login.classList.toggle('hidden');
            form_reg.classList.toggle('hidden');
       },
    });
})
document.getElementById('back').addEventListener('click',function () {
    let tmp=document.querySelectorAll('#form_login>*');
    anime({
        targets:tmp,
        translateY:[-200,0],
        begin: function(anim) {
            form_login.classList.toggle('hidden');
            form_reg.classList.toggle('hidden');
        },
    });
});

form_reg.addEventListener('submit',function (event) {
    event.preventDefault();
    send_form(form_reg,"При обработке произошла ошибка, попробуйте позже");
})
/*валидация*/
function checkText(elem) {
   return /^\w{6,15}$/g.test(String(elem.value));
}
function checkPas(elem) {
    return /^[\w$&=?#|.*%!]{6,15}$/g.test(String(elem.value));
}
function checkEmail(elem) {
    return /^.{3,17}@.{4,8}$/g.test(String(elem.value));
}
function checkIcon() {
 let tmp=document.getElementById('icon_checker').querySelectorAll('input');
 for (let input of tmp){
     if (input.checked==true){
         return true
     }
 }
 return true;
}
/* подсказка*/
document.getElementById('log_reg').addEventListener('focus',function () {
    document.querySelector(`#log_reg+.validate`).classList.remove('hidden');
})
document.getElementById('log_reg').addEventListener('keyup',function () {
    if (checkText(document.getElementById('log_reg'))){
        !document.querySelector(`#log_reg+.validate`).classList.remove('allRed');
        if (!document.querySelector(`#log_reg+.validate`).classList.contains('allGreen')){
            document.querySelector(`#log_reg+.validate`).classList.add('allGreen');
        }
    }
    else{
        !document.querySelector(`#log_reg+.validate`).classList.remove('allGed');
        if (!document.querySelector(`#log_reg+.validate`).classList.contains('allRed')){
            document.querySelector(`#log_reg+.validate`).classList.add('allRed');
        }
    }
})

document.getElementById('log_reg').addEventListener('blur',function () {
    document.querySelector(`#log_reg+.validate`).classList.add('hidden');
})

document.getElementById('nickname').addEventListener('focus',function () {
    document.querySelector(`#nickname+.validate`).classList.remove('hidden');
})

document.getElementById('nickname').addEventListener('keyup',function () {
    if (checkText(document.getElementById('nickname'))){
        !document.querySelector(`#nickname+.validate`).classList.remove('allRed');
        if (!document.querySelector(`#nickname+.validate`).classList.contains('allGreen')){
            document.querySelector(`#nickname+.validate`).classList.add('allGreen');
        }
    }
    else{
        !document.querySelector(`#nickname+.validate`).classList.remove('allGed');
        if (!document.querySelector(`#nickname+.validate`).classList.contains('allRed')){
            document.querySelector(`#nickname+.validate`).classList.add('allRed');
        }
    }
})

document.getElementById('nickname').addEventListener('blur',function () {
    document.querySelector(`#nickname+.validate`).classList.add('hidden');
})

document.getElementById('pas_reg').addEventListener('focus',function () {
    document.querySelector(`#pas_reg+.validate`).classList.remove('hidden');
})

document.getElementById('pas_reg').addEventListener('keyup',function () {
    if (checkPas(document.getElementById('pas_reg'))){
        !document.querySelector(`#pas_reg+.validate`).classList.remove('allRed');
        if (!document.querySelector(`#pas_reg+.validate`).classList.contains('allGreen')){
            document.querySelector(`#pas_reg+.validate`).classList.add('allGreen');
        }
    }
    else{
        !document.querySelector(`#pas_reg+.validate`).classList.remove('allGed');
        if (!document.querySelector(`#pas_reg+.validate`).classList.contains('allRed')){
            document.querySelector(`#pas_reg+.validate`).classList.add('allRed');
        }
    }
})

document.getElementById('pas_reg').addEventListener('blur',function () {
    document.querySelector(`#pas_reg+.validate`).classList.add('hidden');
})



document.getElementById('pas_rep').addEventListener('focus',function () {
    document.querySelector(`#pas_rep+.validate`).classList.remove('hidden');
})

document.getElementById('pas_rep').addEventListener('keyup',function () {
    if (document.getElementById('pas_rep').value==document.getElementById('pas_reg').value){
        !document.querySelector(`#pas_rep+.validate`).classList.remove('allRed');
        if (!document.querySelector(`#pas_rep+.validate`).classList.contains('allGreen')){
            document.querySelector(`#pas_rep+.validate`).classList.add('allGreen');
        }
    }
    else{
        !document.querySelector(`#pas_rep+.validate`).classList.remove('allGed');
        if (!document.querySelector(`#pas_rep+.validate`).classList.contains('allRed')){
            document.querySelector(`#pas_rep+.validate`).classList.add('allRed');
        }
    }
})

document.getElementById('pas_rep').addEventListener('blur',function () {
    document.querySelector(`#pas_rep+.validate`).classList.add('hidden');
})

document.getElementById('mail').addEventListener('focus',function () {
    document.querySelector(`#mail+.validate`).classList.remove('hidden');
})

document.getElementById('mail').addEventListener('keyup',function () {
    if (checkEmail(document.getElementById('mail'))){
        !document.querySelector(`#mail+.validate`).classList.remove('allRed');
        if (!document.querySelector(`#mail+.validate`).classList.contains('allGreen')){
            document.querySelector(`#mail+.validate`).classList.add('allGreen');
        }
    }
    else{
        !document.querySelector(`#mail+.validate`).classList.remove('allGed');
        if (!document.querySelector(`#mail+.validate`).classList.contains('allRed')){
            document.querySelector(`#mail+.validate`).classList.add('allRed');
        }
    }
})

document.getElementById('mail').addEventListener('blur',function () {
    document.querySelector(`#mail+.validate`).classList.add('hidden');
})



let icon_labels= document.querySelectorAll('.glow_up>img')
for (let label of  icon_labels){
    label.addEventListener('click',function () {
        if (!label.classList.contains('chosen')) {
            for (let elem of icon_labels) {
                elem.classList.remove('chosen');
            }
            label.classList.add('chosen');
        }
    })
}

function checkALL() {
        if (checkText(document.getElementById('log_reg')) &&
        checkText(document.getElementById('nickname')) &&
        checkPas(document.getElementById('pas_reg')) &&
        checkEmail(document.getElementById('mail')) &&
        checkIcon()){
            document.getElementById('reg_btn').disabled=false;
            document.getElementById('reg_btn').classList.remove('btn_disabled');
        }
        else if(!document.getElementById('reg_btn').classList.contains('btn_disabled')){
            document.getElementById('reg_btn').classList.add('btn_disabled');
            document.getElementById('reg_btn').disabled=true;
        }

}
let inputs=document.getElementById('form_reg').querySelectorAll('input');

for (let input of inputs ){
    if (!input.classList.contains('icon')) {
        input.addEventListener('keyup', checkALL)
    }
    else{
        input.addEventListener('change',checkALL)
            }
}

// form_reg.addEventListener('change',function () {
//     let obj={};
//     for (let field of form_reg){
//         let {name} =field;
//         if (name){
//             let {type,checked,value}=field;
//             obj[name]=checkboxRadio(type)?checked:value;
//         }
//     }
//     console.log(obj);
// })
function  checkboxRadio(type){return['checkbox','radio'].includes(type)}

form_login.addEventListener('submit', function (event) {
    event.preventDefault();
    send_form(form_login,"Такого пользователя не существует");
})
async function send_form(form,error_log) {
    let broke=false
    await fetch('./php/logReg.php', {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        return response.json();
    }).then(json=>{
        document.getElementById('user_name').textContent=json['user_name'];
        document.querySelector('.account>img').src=json['avatar_url'];
    }).catch(e=>{
        ShowErrorAndLockScroll();
        document.getElementById('error_content').textContent=error_log;
        broke=true;
    })
    form.reset()
    if (!broke) {
        document.getElementById('join_us').remove();
        log_trigger.addEventListener('click',SessionDestroy);
        log_trigger.removeEventListener('click',openModalAndLockScroll);
        closeModal();
    }
}
async function SessionDestroy() {
    await fetch('./php/logReg.php');
    log_trigger.removeEventListener('click',SessionDestroy);
    log_trigger.addEventListener("click",openModalAndLockScroll);
    log_trigger.querySelector('img').src='../images/account.png';
    log_trigger.querySelector('p').textContent='';
}

/*бургер*/
let anim_in_progress=false;
 async function openMenu() {
    if (!anim_in_progress) {
        anime({
            targets: '#menu_content',
            top: 0,
            opacity: [0, 1],
            easing: 'linear',
            duration: 250,
            begin: function() {(anim_in_progress=true)}
        })

       await anime({
            targets: '#menu',
            width:220,
            easing: 'linear',
            duration: 250,
            complete:function() {(anim_in_progress=false)}
        })
        document.getElementById('cross_click').addEventListener('click',closeMenu)
        document.getElementById('cross_click').removeEventListener('click',openMenu)
    }
}
async function closeMenu() {
    if (!anim_in_progress) {
        anime({
            targets: '#menu_content',
            top: -300,
            opacity: [0, 1],
            easing: 'linear',
            duration: 250,
            begin: function() {(anim_in_progress=true)}
        })

        await anime({
            targets: '#menu',
            width:80,
            easing: 'linear',
            duration: 250,
            complete:function() {(anim_in_progress=false)}
        })
        document.getElementById('cross_click').addEventListener('click',openMenu)
        document.getElementById('cross_click').removeEventListener('click',closeMenu)
    }
}
document.getElementById('cross_click').addEventListener('click',openMenu);


//обзоры
let reviews=await fetch('../php/reviews.php').then(response=>{
    return response.json();
})

for(let review of reviews){
    let user=document.createElement('div');
    let time=document.createElement('div');
    let content=document.createElement('div');
    let review_doc=document.createElement('div');

    let user_image=document.createElement('img');
    let user_name=document.createElement('h3');
    let time_timestamp=document.createElement('p');
    let content_content=document.createElement('p');

    user_image.src=review['avatar_url'];
    user_name.textContent=review['user_name'];
    time_timestamp.textContent=review['time'];
    content_content.textContent=review['content']

    user_image.classList.add('avatar');
    review_doc.classList.add('review');
    user.classList.add('user');
    time.classList.add('time');
    content.classList.add('content');

    user.appendChild(user_image);
    user.appendChild(user_name);
    time.appendChild(time_timestamp);
    content.appendChild(content_content);
    review_doc.appendChild(user);
    review_doc.appendChild(time);
    review_doc.appendChild(content);
    document.getElementById('reviews').appendChild(review_doc);
}