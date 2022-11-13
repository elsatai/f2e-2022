let controller = new ScrollMagic.Controller();

let tl1 = anime.timeline({autoplay: false});

let s1a1 = {
    targets: '#planet-01',
    scale: {
        value: [1, 0],
        duration: 1800,
        easing: 'easeInOutSine'
    },
    rotate: {
        value: 100,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    loop: true
};

let s1a2 = {
    targets: '#planet-02',
    scale: [
        {
            value: [0, 1],
            duration: 1800,
            easing: 'easeInOutSine'
        },
        {
            value: [1, 0],
            duration: 1800,
            easing: 'easeInOutSine'
        }
    ],
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    delay: 200,
};

let s1a3 = {
    targets: '#planet-03',
    scale: [
        {
            value: [0, 1],
            duration: 1800,
            easing: 'easeInOutSine'
        }
    ],
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    delay: 200,
};
tl1.add(s1a1).add(s1a2).add(s1a3);

let scene1 = new ScrollMagic.Scene({
  triggerElement: "#block-one",
  duration: 800,
  triggerHook: 0,
})
.on("progress", function (event) {
  tl1.seek(tl1.duration * event.progress);
})
.setPin('#block-one')
.addTo(controller);

let tl2 = anime.timeline({autoplay: false});

let s2a1 = {
    targets: '#conversation-01',
    opacity: 1,
    translateY: -10,
};
let s2a2 = {
    targets: '#conversation-02',
    opacity: 1,
    translateY: -10,
};
let s2a3 = {
    targets: '#conversation-03',
    opacity: 1,
    translateY: -10,
};
let s2a4 = {
    targets: '#conversation-04',
    opacity: 1,
    translateY: -10,
};
let s2a5 = {
    targets: '#conversation-01',
    translateX: -900,
    opacity: 0,
}
let s2a6 = {
    targets: '#conversation-02',
    translateX: 1800,
    opacity: 0,
}
let s2a7 = {
    targets: '#conversation-03',
    translateX: -900,
    opacity: 0,
}
let s2a8 = {
    targets: '#conversation-04',
    translateX: 1800,
    opacity: 0,
}

tl2.add(s2a1).add(s2a2).add(s2a3).add(s2a4).add(s2a5).add(s2a6).add(s2a7).add(s2a8);


let scene2 = new ScrollMagic.Scene({
    triggerElement: "#block-two",
    duration: 1800,
    triggerHook: 0,
})
.on("progress", function (event) {
    tl2.seek(tl2.duration * event.progress);
})
.setPin('#block-two')
.addTo(controller);

