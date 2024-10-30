import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export default class UsuariosFormComponent {

  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    email: ['',[Validators.email]],
    password: ['',[Validators.required]]
  });
  create(){
    const users =console.log(this.form.value)
  }

}
