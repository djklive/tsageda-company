const annee= document.getElementById("span")
const cote_droit_section1= document.getElementById("cote_droit_section1")
const cote_gauche_section1=document.getElementById("cote_gauche_section1")
const haut_section2= document.getElementById("haut_section2")
const haut_section5=document.getElementById("haut_section5")
let nombre=0


window.addEventListener("scroll", ()=>{
    console.log(window.scrollY); 
    if (window.scrollY>2200) {
        
        setInterval(() => {
            if (nombre<30) {
                nombre++
                annee.textContent=nombre+" ans+"
            }
            
        }, 100);
    }else{
        nombre=0
    }
    if (window.scrollY>150) {
        cote_droit_section1.classList.add("cote-droit")
        cote_gauche_section1.classList.add("cote-gauche")
        
    
    }

    if (window.scrollY>700) {
        haut_section2.classList.add("haut")
        
    
    }

    if (window.scrollY>2541) {
        haut_section5.classList.add("haut")
        
    
    }
})

