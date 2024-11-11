import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EspecialidadService } from '../../services/especialidad.service';
import { Especialidad } from '../../model/especialidad.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-especialidad-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './especialidad-form.component.html',
  styleUrl: './especialidad-form.component.css'
})
export default class EspecialidadFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private especialidadService = inject(EspecialidadService);
  form?: FormGroup;
  especialidad?: Especialidad;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.especialidadService.get(parseInt(id))
      .subscribe(especialidad => {
        this.especialidad = especialidad;
        this.form = this.fb.group({

          nombre: [especialidad.nombre,[Validators.required]],
          descripcion: [especialidad.descripcion,[Validators.required]]

      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        nombre: ["",[Validators.required]],
        descripcion: ["",[Validators.required]]
    
      });
    }

  }
  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
    const especialidadForm =this.form!.value;
    let request: Observable<Especialidad>;
    if(this.especialidad)
    {
       request = this.especialidadService.update(this.especialidad.id,especialidadForm);
    }
    else
    {
       request = this.especialidadService.create(especialidadForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['especialidad']);
        }
      })
  }
  cancel() {
    this.router.navigate(['especialidad']);
}



}
