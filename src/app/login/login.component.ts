import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {

}



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     email: [''],
     password: ['']
     })

  }
  login() {
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(
      res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {

          this.loginForm.reset();
          alert(" successfully Login")
          this.router.navigate(['/attach/home'])

        } else {
          alert("Wrong Details!")
        }
      }
    )
  }


}
