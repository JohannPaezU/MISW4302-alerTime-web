import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlerTimeService } from '../../data/alerTime.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-functional-login',
  templateUrl: './functional-login.component.html',
  styleUrls: ['./functional-login.component.css']
})
export class FunctionalLoginComponent implements OnInit {
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
          const user = this.alerTimeService.getUser(
            this.loginForm.value.email,
            this.loginForm.value.password
          );
          if (!user) {
            throw new Error('Usuario o contraseña incorrectos.');
          }
          sessionStorage.setItem('token', this.loginForm.value.email);
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
