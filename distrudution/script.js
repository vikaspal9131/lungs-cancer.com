function cursorEffect(){

  let page1Content = document.querySelector(".page1-content");
  let cursor = document.querySelector(".cursor");
  
  
  page1Content.addEventListener("mousemove" ,function(motion){
    gsap.to(cursor,{
      x:motion.x,
      y:motion.y
    })
  });
  
  page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
  })
  page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      scale:0,
      opacity:0
    })
  })
  }

cursorEffect();

var t1 = gsap.timeline()

t1.from("#loader h3",{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.1,
})
t1.to("#loader h3",{
  opacity:0,
  x:-20,
  duration:1,
  stagger:0.1
})
t1.to("#loader",{
  opacity:0
})
t1.to("#loader",{
  display:"none"
})

t1.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.1
})






