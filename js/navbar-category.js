const verticalMenu = document.getElementById("vertical-menu");
// boilers
const boilersBtn = document.getElementById("boilers-category-navbar");
const boilersHide = document.getElementById("vertical-menu-hide-boilers");
// underfloor
const underfloorBtn = document.getElementById("underfloor-category-navbar");
const underfloorHide = document.getElementById("vertical-menu-hide-underfloor");
// plumb
const plumbBtn = document.getElementById("plumb-category-navbar")
const plumbHide = document.getElementById("vertical-menu-hide-plumb")
// pump
const pumpBtn = document.getElementById("pump-category-navbar")
const pumpHide = document.getElementById("vertical-menu-hide-pump")
// tube
const tubeBtn = document.getElementById("tube-category-navbar")
const tubeHide = document.getElementById("vertical-menu-hide-tube")
// waterclear
const waterclearBtn = document.getElementById("waterclear-category-navbar")
const waterclearHide = document.getElementById("vertical-menu-hide-waterclear")
// garden
const gardenBtn = document.getElementById("garden-category-navbar")
const gardenHide = document.getElementById("vertical-menu-hide-garden")
// tools
const toolsBtn = document.getElementById("tools-category-navbar")
const toolsHide = document.getElementById("vertical-menu-hide-tools")
// watermeters
const watermetersBtn = document.getElementById("watermeters-category-navbar")
const watermetersHide = document.getElementById("vertical-menu-hide-watermeters")


// vertical-menu;
verticalMenu.addEventListener("mouseleave", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})


// boilers
boilersBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "block";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// underfloor 
underfloorBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "block";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// plumb
plumbBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "block";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// pump
pumpBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "block";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// tube
tubeBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "block";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// waterclear
waterclearBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "block";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// garden
gardenBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "block";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "none";
})

// tools
toolsBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "block";
    watermetersHide.style.display = "none";
})

// watermeters
watermetersBtn.addEventListener("mouseenter", () => {
    boilersHide.style.display = "none";
    underfloorHide.style.display = "none";
    plumbHide.style.display = "none";
    pumpHide.style.display = "none";
    tubeHide.style.display = "none";
    waterclearHide.style.display = "none";
    gardenHide.style.display = "none";
    toolsHide.style.display = "none";
    watermetersHide.style.display = "block";
})