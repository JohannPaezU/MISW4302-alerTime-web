import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlerTimeService } from '../data/alerTime.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private alerTimeService: AlerTimeService,
    private router: Router) {}

    ngOnInit() {      
      this.loginForm = this.formBuilder.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],          
      });      
    }

    onSubmit() {
      try {
        if (this.loginForm.valid) {
          const user = this.alerTimeService.getDefaultUser();
          sessionStorage.setItem('token', user.email);
          this.showSuccess('¡Inicio de sesión exitoso!');
          this.router.navigate(['/options/home']);
        } else {
          this.showError('Por favor, completa todos los campos correctamente.');
        }
      } catch (error) {
        this.showError((error as Error).message);
      }
    }
  
    showError(error: string) {
      this.toastrService.error(error, 'Error');
    }
  
    showSuccess(text: string) {
      this.toastrService.success(text);
    }
}
