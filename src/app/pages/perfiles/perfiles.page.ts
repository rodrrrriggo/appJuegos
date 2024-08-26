import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {

  perfilesForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.perfilesForm = this.fb.group({
      username: [this.user?.username || '', Validators.required],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      password: [this.user?.password || '', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSave() {
    if (this.perfilesForm.valid) {
      const updatedUser = this.perfilesForm.value;

      // Guardar los datos actualizados en localStorage
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      users = users.map((user: User) => 
        user.email === updatedUser.email ? updatedUser : user
      );
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      console.log('Perfil actualizado:', updatedUser);
      this.router.navigate(['/catalogo']);
    } else {
      console.log('Formulario inválido');
    }
  }
}

