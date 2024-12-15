function init() {
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
init()

if (window.innerWidth >= 1024){
    gsap.from(".logo",{
      y:"-100px"
    })
} else {
    gsap.from(".logo",{
      y:"-100px"
      })
}

if (window.innerWidth >= 1024) {
    var tlTaglineLeftFirstAnim = gsap.timeline({})
    tlTaglineLeftFirstAnim.from("#launch-heading",{
        x:"-100px",
        duration:.5,
        opacity:0
    })
    tlTaglineLeftFirstAnim.from("#pitch-heading",{
        x:"-100px",
        duration:.5,
        opacity:0
    })
    tlTaglineLeftFirstAnim.from("#fund-heading",{
        x:"-100px",
        duration:.5,
        opacity:0
    })
}else {
    var tlTaglineLeftFirstAnim = gsap.timeline({})
    tlTaglineLeftFirstAnim.from("#launch-heading",{
        y:"-100px",
        duration:.5,
        opacity:0
    })
    tlTaglineLeftFirstAnim.from("#pitch-heading",{
        y:"-100px",
        duration:.5,
        opacity:0
    })
    tlTaglineLeftFirstAnim.from("#fund-heading",{
        y:"-100px",
        duration:.5,
        opacity:0
    })

}

if (window.innerWidth >= 1024) {
    var tlTaglineLeftSecondAnim = gsap.timeline({
        scrollTrigger:{
            trigger: "#tagline-right-content",
            scroller:".main",
            // markers:true,
            start:"top 30%",
            end:"top 10%",
            // pin:true,
            scrub:1
        }
    })

    tlTaglineLeftSecondAnim.from("#launch-heading", {
        y:"15px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from("#pitch-heading", {
        y:"15px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from("#fund-heading", {
        y:"15px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from(".tagline-right", {
        y:"15px",
        duration:.5
    }, "a")

}else {
    var tlTaglineLeftSecondAnim = gsap.timeline({
        scrollTrigger:{
            trigger: "#tagline-right-content",
            scroller:".main",
            // markers:true,
            start:"top 50%",
            end:"top 40%",
            // pin:true,
            scrub:1
        }
    })

    tlTaglineLeftSecondAnim.from("#launch-heading", {
        y:"5px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from("#pitch-heading", {
        y:"5px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from("#fund-heading", {
        y:"5px",
        duration:.5
    }, "a")

    tlTaglineLeftSecondAnim.from(".tagline-right", {
        y:"50px",
        duration:.5
    }, "a")
}
  
if (window.innerWidth >= 1024) {
    var tlTaglineRightFirstAnim = gsap.timeline({})
    tlTaglineRightFirstAnim.from(".tagline-right", {
        x:"100px",
        opacity:0,
        duration:.5
    })
}else{
    var tlTaglineRightFirstAnim = gsap.timeline({})
    tlTaglineRightFirstAnim.from(".tagline-right", {
        y:"100px",
        opacity:0,
        duration:.5
    })
}

if(window.innerWidth >= 1024) {
    var tlScrollBox = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-content",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 30%",
            // pin:true,
            scrub:5
        }
    })

    tlScrollBox.to(".scroll-content",{
        height:"100vh",
        width:"100vw",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px"
    })

    tlScrollBox.from(".scroll-heading h1",{
        opacity:0
    }, "b")

    tlScrollBox.from(".scroll-content-left h2",{
        opacity:0
    }, "b")

    tlScrollBox.from(".scroll-content-right",{
        opacity:0
    }, "b")

} else {
    var tlScrollBox = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-content",
            scroller:".main",
            // markers:true,
            start:"top 50%",
            end:"top 30%",
            // pin:true,
            scrub:5
        }
    })
    

    tlScrollBox.to(".scroll-content",{
        height:"100vh",
        width:"100vw",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomLeftRadius: "0px"
    })

    tlScrollBox.from(".scroll-heading h1",{
        opacity:0
    }, "b")

    tlScrollBox.from(".scroll-content-left h2",{
        opacity:0
    }, "b")

    tlScrollBox.from(".scroll-content-right",{
        opacity:0
    }, "b")
}




if (window.innerWidth >= 1024) {
    var tlAboutAnimOne = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-right-heading h1",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 30%",
            // pin:true,
            scrub:1
        }
    })

    tlAboutAnimOne.from(".about-left h1",{
        x:"-100px",
        // opacity:0
    }, "c")

    tlAboutAnimOne.from(".about-right-heading",{
        y:"-50px",
        opacity:0
    }, "c")

    tlAboutAnimOne.from("#sections h1",{
        x:"-50px"
    }, "c")

    tlAboutAnimOne.from("#sections p",{
        x:"50px"
    }, "c")
} else {
    var tlAboutAnimTwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-right-heading h1",
            scroller:".main",
            // markers:true,
            start:"top 60%",
            end:"top 20%",
            // pin:true,
            scrub:1
        }
    })

    tlAboutAnimTwo.from(".about-right-heading",{
        y:"100px"
    }, "d")

    tlAboutAnimTwo.from("#sections",{
        y:"100px"
    },"d")

}



if (window.innerWidth >= 1024) {
    var tlPlansAnimeone = gsap.timeline({
        scrollTrigger: {
            trigger: ".plans-page",
            scroller:".main",
            // markers:true,
            start:"top 50%",
            end:"top 00%",
            // pin:true,
            scrub:1
        }
    })

    tlPlansAnimeone.to(".plans-container",{
        height:"150vh",
    }, "e")
    tlPlansAnimeone.from(".plans-heading",{
        opacity:0,
    }, "e")
    tlPlansAnimeone.from(".plans-cards",{
        opacity:0,
    }, "e")
    tlPlansAnimeone.from(".plans-lets-talk",{
        opacity:0,
    }, "e")
} else {
    var tlPlansAnimeTwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".plans-page",
            scroller:".main",
            // markers:true,
            start:"top 50%",
            end:"top 0%",
            // pin:true,
            scrub:2
        }
    })

    tlPlansAnimeTwo.to(".plans-container",{
        height:"300vh",
    }, "f")
    tlPlansAnimeTwo.from(".plans-heading",{
        opacity:0,
    }, "f")
    tlPlansAnimeTwo.from(".plans-cards",{
        opacity:0,
    }, "f")
    tlPlansAnimeTwo.from(".plans-lets-talk",{
        opacity:0,
    }, "f")
}