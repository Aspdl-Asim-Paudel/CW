import { Injectable } from '@nestjs/common';
import { CheckLoginDto } from './checkLogin.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getproduct(): any {
    let tshirtobject;
    tshirtobject = {
      TshirtName: "Polo",
      id: 1,
      country: "Italy",
      Store: "hi Store"
    }
    return tshirtobject; 
  }

  getusers(): any {
    let studentobject; 
    studentobject = {
      Name: "Anim",
      Jilla: "Gandakii", 
      Zip_Code: 3456
    } 

    return studentobject; 
  }

  checkLogin(checkLogin:CheckLoginDto):any {
    const nametoCheck = "anim";
    const usernametoCheck = "anim23013"; 
    const passwordtoCheck = "anim013";

    if(nametoCheck == checkLogin.name && usernametoCheck == checkLogin.username && passwordtoCheck == checkLogin.password) {
      return {success: "Name, username and password correct"};
    }  
    else {
      return {success:false}
    }
  } 
}
