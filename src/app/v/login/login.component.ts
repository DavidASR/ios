import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { loginI } from '../../interface/login.interface';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      usernamei: new FormControl('',Validators.required),
      passwordi: new FormControl('',Validators.required)
  })



  constructor( private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(form:loginI){
   this.api.loginByEmail(form).subscribe(data =>{
     console.log(data);
     
   })
    
  }
}
