import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private loadingController: LoadingController
            ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Crear y presentar la pantalla de carga
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
        spinner: 'crescent',
      });
      await loading.present();

      // Constante para btener datos existentes del localStorage
      setTimeout(() => {
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: User) => u.email === email && u.password === password);

        loading.dismiss(); // Ocultar la pantalla de carga

        if (user) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/catalogo']);
        } else {
          alert('Por favor, completa todos los campos correctamente.');
        }
      }, 1000); // Tiempo de simulación
    } else {
      alert('Email o contraseña incorrectos.');
    }
  }
}


