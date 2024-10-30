import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-permisos-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './permisos-form.component.html',
  styleUrl: './permisos-form.component.css'
})
export default class PermisosFormComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['',[Validators.required]],
   
  });
  create(){
    const permisos =console.log(this.form.value)
  }

}
