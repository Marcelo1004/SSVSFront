import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicos-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './medicos-form.component.html',
  styleUrl: './medicos-form.component.css'
})
export default class MedicosFormComponent implements OnInit{
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    
  }
  form = this.fb.group({
    name: ['',[Validators.required]],
    lastname: ['',[Validators.required]],
    email: ['',[Validators.email]],
    phone: ['',[Validators.maxLength(8)]],
    speciality: ['',[Validators.required]],
  });

  create(){
    const medicos =console.log(this.form.value)
  }

}
