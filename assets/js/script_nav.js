// const nav =document.querySelector("nav")
// const body =document.querySelector("body")
// const boutonMenu=document.getElementById("menu")
// const boutonremoveSidebar=document.getElementById('removeSidebar')
// const sidebar=document.getElementById("sidebar")
// window.addEventListener("scroll",()=>{
//     if (window.scrollY>100) {
      
//         sidebar.style.top = 0
//         nav.style.position="fixed"
//         nav.style.top = 0
//         nav.style.height= 60+"px"
//         nav.style.transition=.2+"s"
//         sidebar.style.position="fixed"
//         sidebar.style.top = 0


//     }else{
       
//         nav.style.position="relative"
//         nav.style.transition=.2+"s"
//         nav.style.height= 48+"px"
       

//     }
     
// })

// boutonMenu.addEventListener("click",()=>{
//     sidebar.classList.toggle("hidden")
    
// })
// boutonremoveSidebar.addEventListener("click",()=>{
//     sidebar.classList.toggle("hidden")
// })

// Mobile menu functionality
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const removeSidebar = document.getElementById('removeSidebar');
const nav = document.querySelector("nav");
const mobileNavbar = document.getElementById("mobile-navbar");

window.addEventListener("scroll",()=>{
  if (window.scrollY>300) {
    
      // Sur mobile, faire défiler la barre de navigation mobile aussi
      if (mobileNavbar) {
          mobileNavbar.style.position="fixed"
          mobileNavbar.style.top = 0
          mobileNavbar.style.width = "100%"
          mobileNavbar.style.zIndex = "50"
          mobileNavbar.style.backgroundColor = "white"
          mobileNavbar.style.transition=.2+"s"
      }
      
      if (nav) {
          nav.style.position="fixed"
          // La barre bleue se place en dessous de la barre blanche (88px de hauteur)
          nav.style.top = "88px"
          nav.style.height= 48+"px"
          nav.style.zIndex = "40"
          nav.style.transition=.2+"s"
      }


  }else{
     
      // Sur mobile, remettre la barre de navigation en position relative
      if (mobileNavbar) {
          mobileNavbar.style.position="relative"
          mobileNavbar.style.transition=.2+"s"
      }
      
      if (nav) {
          nav.style.position="relative"
          nav.style.transition=.2+"s"
          nav.style.height= 48+"px"
          nav.style.top = "8px"

      }
     

  }
   
})

if (menu && sidebar) {
    menu.addEventListener('click', () => {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('active');
    });
}

if (removeSidebar && sidebar) {
    removeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
        setTimeout(() => {
            sidebar.classList.add('hidden');
        }, 300);
    });
}

// Close sidebar when clicking outside
if (menu && sidebar) {
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menu.contains(e.target) && !sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('active');
            setTimeout(() => {
                sidebar.classList.add('hidden');
            }, 300);
        }
    });
}