import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../model/receta.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta-form',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './receta-form.component.html',
  styleUrl: './receta-form.component.css'
})
export default class RecetaFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private recetaService = inject(RecetaService);

  form?: FormGroup;
  recetas?: Receta;
  errors: string[] = [];



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.recetaService.get(parseInt(id))
      .subscribe(receta => {
        this.recetas = receta;
        this.form = this.fb.group({
          indicaciones: [receta.indicaciones,[Validators.required,Validators.minLength(10)]],
          fechaInicio: [receta.fechaInicio,[Validators.required,Validators.minLength(6)]],
          fechaFinal: [receta.fechaFinal,[Validators.required,Validators.minLength(10)]],
          
        
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        indicaciones: ['',[Validators.required,Validators.minLength(3)]],
        fechaInicio: ['',[Validators.required,Validators.minLength(6)]],
        fechaFinal: ['',[Validators.required,Validators.minLength(10)]],
        
      });
    }
  }
  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
  
    const userForm =this.form!.value;
    let request: Observable<Receta>;
    if(this.recetas)
    {
       request = this.recetaService.update(this.recetas.id,userForm);
    }
    else
    {
       request = this.recetaService.create(userForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['receta']);
        }
      })
  }
  cancel() {
    this.router.navigate(['receta']);
}

}
