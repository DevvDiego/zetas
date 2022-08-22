/*to handle the checkbox and see if its checked or not */


//the dom checkbox and icon
const MenuCheckbox = document.querySelector("nav>#hideNav");
const MenuIcon = document.querySelector("#state");


//No funciona, la funcion si jala pero no cambia el icono
const icon_setX = ()=>{
    MenuIcon.setAttribute("src","img/X_Icon.png");
}

const icon_setBurger = ()=>{
    MenuIcon.setAttribute("src","img/menuIcon.png");

}


MenuCheckbox.addEventListener('change', (e)=>{
if(e.target.checked) {
	icon_setBurger();

} else{
	icon_setX();

}
});