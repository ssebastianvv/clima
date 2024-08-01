const logoutbutton =document.querySelector("#log.out-btn");


document.addEventListener("DOMContentLoaded",()=>{
    if(!sessionStorage.getItem("token")){
        window.location.href="/"
    }
})// este es el guardian 

logoutbutton?.addEventListener("click",()=>{
    sessionStorage.removeItem("tokken");
    window.location.href="/"
})