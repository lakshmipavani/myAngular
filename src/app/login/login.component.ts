import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
     var username= e.target.elements[0].value;
     var password= e.target.elements[1].value;

     if(username== 'pavani' && password == 'pavani'){
        console.log('success');
        this.userService.setUserLoggedIn();
        this.router.navigate(['/mainView']);
     }else{
        console.log('error');
     }
  }
  register(e){
     this.router.navigate(['/newCustomerRegistration']);
  }

}