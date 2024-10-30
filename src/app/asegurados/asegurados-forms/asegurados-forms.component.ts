import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-asegurados-forms',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule ],
  templateUrl: './asegurados-forms.component.html',
  styleUrl: './asegurados-forms.component.css'
})
export default class AseguradosFormsComponent{
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    email: ['',[Validators.email]],
    phone: ['',[Validators.maxLength(8)]],
  });

  create(){
    const aseg =console.log(this.form.value)
  }
}