const nav =document.querySelector("nav")
const body =document.querySelector("body")
const boutonMenu=document.getElementById("menu")
const boutonremoveSidebar=document.getElementById('removeSidebar')
const sidebar=document.getElementById("sidebar")
window.addEventListener("scroll",()=>{
    if (window.scrollY>100) {
      
        sidebar.style.top = 0
        nav.style.position="fixed"
        nav.style.top = 0
        nav.style.height= 60+"px"
        nav.style.transition=.2+"s"
        sidebar.style.position="fixed"
        sidebar.style.top = 0


    }else{
       
        nav.style.position="relative"
        nav.style.transition=.2+"s"
        nav.style.height= 48+"px"
       

    }
     
})

boutonMenu.addEventListener("click",()=>{
    sidebar.classList.toggle("hidden")
    
})
boutonremoveSidebar.addEventListener("click",()=>{
    sidebar.classList.toggle("hidden")
})