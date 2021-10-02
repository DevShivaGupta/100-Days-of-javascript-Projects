
const button = document.querySelector(".buttons");
const hexcode = document.querySelector(".hexcode");
function codegen()
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    hexcode.textContent='#'+randomColor;
    document.querySelector('body').style.backgroundColor='#'+randomColor;
}
button.addEventListener('click',codegen);