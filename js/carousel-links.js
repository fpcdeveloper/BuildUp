// * Botones
const campoLuxuryButton = document.getElementById("campoLuxuryButton")
const gardenClassicButton = document.getElementById("gardenClassicButton")
const gardenFullButton = document.getElementById("gardenFullButton")
const quebradaClassicButton = document.getElementById("quebradaClassicButton")
const pinarBasisButton = document.getElementById("pinarBasisButton")
const quebradaHighButton = document.getElementById("quebradaHighButton")
const rosasBasisButton = document.getElementById("rosasBasisButton")
const rosasLocalesButton = document.getElementById("rosasLocalesButton")

// * Fotos
const campoLuxury = document.getElementById("campoLuxury")
const gardenClassic = document.getElementById("gardenClassic")
const gardenFull = document.getElementById("gardenFull")
const quebradaClassic = document.getElementById("quebradaClassic")
const pinarBasis = document.getElementById("pinarBasis")
const quebradaHigh = document.getElementById("quebradaHigh")
const rosasBasis = document.getElementById("rosasBasis")
const rosasLocales = document.getElementById("rosasLocales")

const linkTo = (item) => {
    campoLuxury.classList.remove("active")
    gardenClassic.classList.remove("active")
    gardenFull.classList.remove("active")
    quebradaClassic.classList.remove("active")
    pinarBasis.classList.remove("active")
    quebradaHigh.classList.remove("active")
    rosasBasis.classList.remove("active")
    rosasLocales.classList.remove("active")
    item.classList.add("active")
}

const linkCheck = (item) => {
    rosasLocalesButton.style.color =  "black";
    rosasLocalesButton.style.backgroundColor = "transparent";
    rosasLocalesButton.style.padding = "0px";
    rosasBasisButton.style.color =  "black";
    rosasBasisButton.style.backgroundColor = "transparent";
    rosasBasisButton.style.padding = "0px";
    quebradaHighButton.style.color =  "black";
    quebradaHighButton.style.backgroundColor = "transparent";
    quebradaHighButton.style.padding = "0px";
    pinarBasisButton.style.color =  "black";
    pinarBasisButton.style.backgroundColor = "transparent";
    pinarBasisButton.style.padding = "0px";
    quebradaClassicButton.style.color =  "black";
    quebradaClassicButton.style.backgroundColor = "transparent";
    quebradaClassicButton.style.padding = "0px";
    gardenFullButton.style.color =  "black";
    gardenFullButton.style.backgroundColor = "transparent";
    gardenFullButton.style.padding = "0px";
    gardenClassicButton.style.color =  "black";
    gardenClassicButton.style.backgroundColor = "transparent";
    gardenClassicButton.style.padding = "0px";
    campoLuxuryButton.style.color =  "black";
    campoLuxuryButton.style.backgroundColor = "transparent";
    campoLuxuryButton.style.padding = "0px";

    item.style.color = "#47c3f8";
    item.style.backgroundColor = "transparent";
    item.style.padding = "0px"; 
}

const goTo = (item, itemButton) => {
    rosasLocalesButton.style.color =  "black";
    rosasLocalesButton.style.backgroundColor = "transparent";
    rosasLocalesButton.style.padding = "0px";
    rosasBasisButton.style.color =  "black";
    rosasBasisButton.style.backgroundColor = "transparent";
    rosasBasisButton.style.padding = "0px";
    quebradaHighButton.style.color =  "black";
    quebradaHighButton.style.backgroundColor = "transparent";
    quebradaHighButton.style.padding = "0px";
    pinarBasisButton.style.color =  "black";
    pinarBasisButton.style.backgroundColor = "transparent";
    pinarBasisButton.style.padding = "0px";
    quebradaClassicButton.style.color =  "black";
    quebradaClassicButton.style.backgroundColor = "transparent";
    quebradaClassicButton.style.padding = "0px";
    gardenFullButton.style.color =  "black";
    gardenFullButton.style.backgroundColor = "transparent";
    gardenFullButton.style.padding = "0px";
    gardenClassicButton.style.color =  "black";
    gardenClassicButton.style.backgroundColor = "transparent";
    gardenClassicButton.style.padding = "0px";
    campoLuxuryButton.style.color =  "black";
    campoLuxuryButton.style.backgroundColor = "transparent";
    campoLuxuryButton.style.padding = "0px";

    itemButton.style.color = "black";
    itemButton.style.backgroundColor = "#ededed";
    itemButton.style.padding = "1px"; 

    campoLuxury.classList.remove("active")
    gardenClassic.classList.remove("active")
    gardenFull.classList.remove("active")
    quebradaClassic.classList.remove("active")
    pinarBasis.classList.remove("active")
    quebradaHigh.classList.remove("active")
    rosasBasis.classList.remove("active")
    rosasLocales.classList.remove("active")

    item.classList.add("active")
}

const buttonCheck = () => {
    rosasLocalesButton.style.color =  "black";
    rosasLocalesButton.style.backgroundColor = "transparent";
    rosasLocalesButton.style.padding = "0px";
    rosasBasisButton.style.color =  "black";
    rosasBasisButton.style.backgroundColor = "transparent";
    rosasBasisButton.style.padding = "0px";
    quebradaHighButton.style.color =  "black";
    quebradaHighButton.style.backgroundColor = "transparent";
    quebradaHighButton.style.padding = "0px";
    pinarBasisButton.style.color =  "black";
    pinarBasisButton.style.backgroundColor = "transparent";
    pinarBasisButton.style.padding = "0px";
    quebradaClassicButton.style.color =  "black";
    quebradaClassicButton.style.backgroundColor = "transparent";
    quebradaClassicButton.style.padding = "0px";
    gardenFullButton.style.color =  "black";
    gardenFullButton.style.backgroundColor = "transparent";
    gardenFullButton.style.padding = "0px";
    gardenClassicButton.style.color =  "black";
    gardenClassicButton.style.backgroundColor = "transparent";
    gardenClassicButton.style.padding = "0px";
    campoLuxuryButton.style.color =  "black";
    campoLuxuryButton.style.backgroundColor = "transparent";
    campoLuxuryButton.style.padding = "0px";

    if (campoLuxury.className == "carousel-item active"){
        campoLuxuryButton.style.color =  "black";
        campoLuxuryButton.style.backgroundColor = "#ededed";
        campoLuxuryButton.style.padding = "1px";
    } else if(gardenClassic.className == "carousel-item active") {
        gardenClassicButton.style.color =  "black";
        gardenClassicButton.style.backgroundColor = "#ededed";
        gardenClassicButton.style.padding = "1px";
    } else if(gardenFull.className == "carousel-item active") {
        gardenFullButton.style.color =  "black";
        gardenFullButton.style.backgroundColor = "#ededed";
        gardenFullButton.style.padding = "1px";
    }
    else if(quebradaClassic.className == "carousel-item active") {
        quebradaClassicButton.style.color =  "black";
        quebradaClassicButton.style.backgroundColor = "#ededed";
        quebradaClassicButton.style.padding = "1px";
    }
    else if(pinarBasis.className == "carousel-item active") {
        pinarBasisButton.style.color =  "black";
        pinarBasisButton.style.backgroundColor = "#ededed";
        pinarBasisButton.style.padding = "1px";
    }
    else if(quebradaHigh.className == "carousel-item active") {
        quebradaHighButton.style.color =  "black";
        quebradaHighButton.style.backgroundColor = "#ededed";
        quebradaHighButton.style.padding = "1px";
    }
    else if(rosasBasis.className == "carousel-item active") {
        rosasBasisButton.style.color =  "black";
        rosasBasisButton.style.backgroundColor = "#ededed";
        rosasBasisButton.style.padding = "1px";
    }
    else if(rosasLocales.className == "carousel-item active") {
        rosasLocalesButton.style.color =  "black";
        rosasLocalesButton.style.backgroundColor = "#ededed";
        rosasLocalesButton.style.padding = "1px";
    }
}
buttonCheck()

campoLuxuryButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(campoLuxury)
    linkCheck(campoLuxuryButton)
})
gardenClassicButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(gardenClassic)
    linkCheck(gardenClassicButton)
})
gardenFullButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(gardenFull)
    linkCheck(gardenFullButton)
})
quebradaClassicButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(quebradaClassic)
    linkCheck(quebradaClassicButton)
})
pinarBasisButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(pinarBasis)
    linkCheck(pinarBasisButton)
})
quebradaHighButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(quebradaHigh)
    linkCheck(quebradaHighButton)
})
rosasBasisButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(rosasBasis)
    linkCheck(rosasBasisButton)
})
rosasLocalesButton.addEventListener("click", (e) => {
    e.preventDefault()
    linkTo(rosasLocales)
    linkCheck(rosasLocalesButton)
})
