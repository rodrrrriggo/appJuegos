import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registerForm!: FormGroup;

  

  constructor(private fb: FormBuilder, private router: Router, private loadingController: LoadingController) { }

  //NG Para poder hacer que se valide lo que el usuario este ingresando
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      let users = JSON.parse(localStorage.getItem('users') || '[]');

      // Crear y presentar la pantalla de carga
      const loading = await this.loadingController.create({
        message: 'Creando Cuenta...',
        spinner: 'crescent',
      });
      await loading.present();

    
    // Añadir el nuevo usuario
    setTimeout(() => {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('isLoggedIn', 'true');  
      console.log('Datos guardados en LocalStorage:', formData);

      loading.dismiss(); // Ocultar la pantalla de carga

      // Redirigir al usuario a la página de catálogo
      this.router.navigate(['/login']);
    }, 2000); // Tiempo de simulación
  } else {
    console.log('Formulario inválido');
  }
}
}


