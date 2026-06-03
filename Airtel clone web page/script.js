let mobile = document.querySelector("#mobileNavigation ul");
let ham_burger = document.querySelector("#logo i");
let space = document.querySelector("#space");
let body = document.querySelector("body");
let BCT = document.querySelector("#footerMobile h3");
let BCTT = document.querySelector("#footerLast h2");

//onclicking hamBurger icon menu open- steps executed
ham_burger.addEventListener("focus" , ()=>{
  mobile.style.left="-0.8rem";
  space.style.opacity="0.5";
  space.style.display="block";
  space.style.transition="500ms";
  body.style.overflow ="hidden";
});

//onclicking rest black space menu hide  - steps executed
space.addEventListener("click" , ()=>{
  mobile.style.left="-49rem";
  space.style.opacity="0";
  space.style.transition="100ms";
  space.style.display="none";
  body.style.overflow = "scroll";
})

//for scrolling to top for mobile and tabs
BCT.addEventListener("click" , ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
  });
});

//for scrolling to top
BCTT.addEventListener("click" , ()=>{
   window.scrollTo({
     top:0,
     left:0,
     behavior:"smooth",
   });
});







