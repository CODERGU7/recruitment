window.addEventListener('scroll',()=>{
let value = window.scrollY;

if(value>=4){
    document.getElementById("navbar").style.backgroundColor="rgb(44, 44, 44)"
}else{
    document.getElementById("navbar").style.backgroundColor="transparent"

}



})
