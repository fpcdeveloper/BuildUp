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
    campoLuxuryButton.style.color = "black";
    gardenClassicButton.style.color = "black";
    gardenFullButton.style.color = "black";
    quebradaClassicButton.style.color = "black";
    pinarBasisButton.style.color = "black";
    quebradaHighButton.style.color = "black";
    rosasBasisButton.style.color = "black";
    rosasLocalesButton.style.color = "black";
    item.style.color = "red";
}

const goTo = (item, itemButton) => {
    campoLuxuryButton.style.color = "black";
    gardenClassicButton.style.color = "black";
    gardenFullButton.style.color = "black";
    quebradaClassicButton.style.color = "black";
    pinarBasisButton.style.color = "black";
    quebradaHighButton.style.color = "black";
    rosasBasisButton.style.color = "black";
    rosasLocalesButton.style.color = "black";
    itemButton.style.color = "red";
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
    rosasBasisButton.style.color =  "black";
    quebradaHighButton.style.color =  "black";
    pinarBasisButton.style.color =  "black";
    quebradaClassicButton.style.color =  "black";
    gardenFullButton.style.color =  "black";
    gardenClassicButton.style.color =  "black";
    campoLuxuryButton.style.color =  "black";
    if (campoLuxury.className == "carousel-item active"){
        campoLuxuryButton.style.color =  "blue";
    } else if(gardenClassic.className == "carousel-item active") {
        gardenClassicButton.style.color =  "blue";
    } else if(gardenFull.className == "carousel-item active") {
        gardenFullButton.style.color =  "blue";
    }
    else if(quebradaClassic.className == "carousel-item active") {
        quebradaClassicButton.style.color =  "blue";
    }
    else if(pinarBasis.className == "carousel-item active") {
        pinarBasisButton.style.color =  "blue";
    }
    else if(quebradaHigh.className == "carousel-item active") {
        quebradaHighButton.style.color =  "blue";
    }
    else if(rosasBasis.className == "carousel-item active") {
        rosasBasisButton.style.color =  "blue";
    }
    else if(rosasLocales.className == "carousel-item active") {
        rosasLocalesButton.style.color =  "blue";
    }
}


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
