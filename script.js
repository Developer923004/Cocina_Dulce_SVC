//===============================
// Animación al cargar la página
//===============================

window.addEventListener("load", () => {

    document.querySelector(".hero-texto").style.opacity = "1";
    document.querySelector(".hero-texto").style.transform = "translateY(0)";

});

//===============================
// Animación al hacer Scroll
//===============================

const secciones = document.querySelectorAll("section");

const mostrarSecciones = () => {

    const alturaPantalla = window.innerHeight;

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 120) {

            seccion.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();

//===============================
// Botón Volver Arriba
//===============================

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";

botonArriba.id = "arriba";

document.body.appendChild(botonArriba);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




/*nuevo nav*/

//=============================
// MENÚ HAMBURGUESA
//=============================

const menu = document.getElementById("menu");

const botonMenu = document.getElementById("menuHamburguesa");

if(botonMenu){

botonMenu.addEventListener("click",()=>{

menu.classList.toggle("activo");

});

}


const enlaces=document.querySelectorAll("#menu a");

enlaces.forEach(enlace=>{

enlace.addEventListener("click",()=>{

menu.classList.remove("activo");

});

});