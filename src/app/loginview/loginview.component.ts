import { Component, OnInit } from '@angular/core';
import { RouterModule, Router}  from '@angular/router';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['loginview.component.css']
})
export class LoginviewComponent implements OnInit {
  title = 'Login View';
  object = {
    link: "../../assets/web-page.jpg"
  }

  data: Object = {};
  constructor(private _router: Router){};
  formSubmit(){

  //var uname= this.data.username;
  //var pass= this.data.password;
  //var key= btoa(btoa(uname)+ '??' +btoa(pass));
   // document.cookie="sessionID="+key+';';
  //  console.log(this.data);
   // console.log(key);
   // if(uname == "admin" && pass == "pavani"){
    this._router.navigate(['admin']);
  //}else if(uname == undefined && pass == undefined){
      console.log("please enter details");
     // this._router.navigate(['admin']);
  // }
  // else{
      this._router.navigate(['/nav-bar']);
  //  }    
  }
  ngOnInit() {
  }
}