import { Component, OnInit } from '@angular/core';
import { RouterModule, Router}  from '@angular/router';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['loginview.component.css']
})
export class LoginviewComponent implements OnInit {
  title = 'samplelog';
  object = {
    link: "../../assets/web-page.jpg"
  }
  firstLogin:boolean = true;
  data: any = {};
  constructor(private _router: Router){};
        formSubmit(){
            //if(this.firstLogin){
            //   this.data.username = "";
            //   this.data.password = "";
            //}
            //else{
            //   this.data.username = this.data.username;
            //   this.data.password = this.data.password;
            //}
               var uname= this.data.username;
               var pass= this.data.password;
               var key= btoa(btoa(uname)+ '??' +btoa(pass));
               document.cookie="sessionID="+key+';';


            if(uname == "admin" && pass == "pavani"){
                   //this._router.navigate(['admin']);
            }else if(uname == "" || pass == ""){
                  console.log("please enter details");
                  this._router.navigate(['login']);
            }else if(uname == "pavani" && pass == "pavani"){
                  this._router.navigate(['/dashboard']);
            }else{
                  console.log("please enter details");
                  this._router.navigate(['login']);
            }
          }
    ngOnInit() {
    }
}