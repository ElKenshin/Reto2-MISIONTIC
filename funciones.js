function despliegue() {
  const menu = document.getElementById("header");
  if (menu.className === "header") {
    menu.className = "responsive";
  } else {
    menu.className = "header";
  }
}

function repliegue() {
  const menu = document.getElementById("header");
  if (menu.className === "responsive") {
    menu.className = "header";
  }
}

function imagen() {
  const lateral = document.getElementById("lateral");
  if (lateral.className == "menuLat") {
    lateral.className += " misionTic";
  }
}