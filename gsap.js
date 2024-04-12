var tl = gsap.timeline()

// for the loader
function time() {
    var a = 0;
    //set interval basically opposite of set timeout it just gets on repeated the function every after the 1000ms
    setInterval(function () {
        a = a + Math.floor(Math.random() * 10);
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + '%';
        }
        else {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + '%';
        }
        console.log(a);
    }, 100);
}

tl.to("#loader h1", {
    scale: 2,
    delay: 0.5,
    duration: 1,
    onStart: time()
});
tl.to("#loader", {
    top: "-100vh",
    delay: 0.3,
    duration: 2.5
});


// for the nav bar 
tl.from("#header .container nav",{
    transform : "translateY(-100%)",
    duration:1,
})

// for the p tag with the title Web Dev. & UI/UX Designer
tl.from(".header-text p",{
    transform: "translateX(-100%)",
    duration:2,
})

//for the h1 just below the upper lines code
tl.from(".header-text h1",{
    transform: "translateX(150%)",
    duration:2,
})

//for my name to come out 
tl.from(".header-text span",{
    opacity:0,
    duration:2,
})

//for about me section
gsap.from("#about *",{
    scale: 0,
    delay:0.4,
    opacity:0,
    duration:3,
    stagger:0.3,
    scrollTrigger: {
        trigger:".about-col-2",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 50%",
        scrub: 3
    }
})
// for services section 
gsap.from("#services *",{
    scale: 0,
    delay:0.4,
    opacity:0,
    duration:3,
    stagger:0.3,
    scrollTrigger: {
        trigger:".services-list",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 50%",
        scrub: 3
    }
})
//portfolio my work section
gsap.from("#portfolio *",{
    scale: 0,
    delay:0.4,
    opacity:0,
    duration:3,
    stagger:0.3,
    scrollTrigger: {
        trigger:".work-list",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 50%",
        scrub: 3
    }
})