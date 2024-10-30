import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-roles-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './roles-form.component.html',
  styleUrl: './roles-form.component.css'
})
export default class RolesFormComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['',[Validators.required]],
   
  });
  create(){
    const roles =console.log(this.form.value)
  }

}
