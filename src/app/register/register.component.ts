import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlerTimeService } from '../data/alerTime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private alerTimeService: AlerTimeService,
    private router: Router) {}

    ngOnInit() {      
      this.registerForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(128)]],
        lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(128)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],          
      });
    }

    onSubmit() {
      try {
        if (this.registerForm.valid) {
          if (
            this.registerForm.value.password !=
            this.registerForm.value.confirmPassword
          ) {
            this.showError('Las contraseñas no coinciden.');
            return;
          }
          this.alerTimeService.registerUser(
            this.registerForm.value.firstName,
            this.registerForm.value.lastName,
            this.registerForm.value.email,
            this.registerForm.value.password
          );
          sessionStorage.setItem('token', this.registerForm.value.email);
          this.showSuccess('¡Cuenta creada exitosamente!');
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
