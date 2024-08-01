import { PageController } from "./controller/page.controllers"

const url= "https://reqres.in/api/"

const loginForm =document.querySelector("#loginform") as HTMLFormElement
const emailUser = document.querySelector("#emailuser") as HTMLInputElement
const passwordUser= document.querySelector("#password-user") as HTMLInputElement

loginForm.addEventListener("submit", async (event:Event)=>{
  event.preventDefault();

  const user = {
    email:emailUser.value,
    password : passwordUser.value
  }
  
  try{

    const pageController=new PageController(url);
    const responseOfLogin=await pageController.login(user,"login")
    //console.log(token.token); para mirar si funciona
    sessionStorage.setItem("token",responseOfLogin.token)// el token. token por que es un objeto

    const getToken = sessionStorage.getItem("token");
  if(getToken=== responseOfLogin.token){
    
    window.location.href="./src/view/home.html"
  }
}catch(e){
  console.log(e)
}

  })
