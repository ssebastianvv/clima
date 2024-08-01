import { ILogin,ResponseLogin } from "../model/Ilogin";

export class PageController{
    url:string;

    constructor(url:string){
        this.url=url
    }
    async login(data:ILogin, endPoint:string){
        const response =await fetch(`${this.url}${endPoint}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)

        });


        if (response.status!=200){
            throw new Error("no se pudo iniciar sesion") 
        }
        else{
            alert("")
        }
        const responseOfLogin=await response.json();
        //this.tokenlog=responseOfLogin.token
        return responseOfLogin;
    }   
}
