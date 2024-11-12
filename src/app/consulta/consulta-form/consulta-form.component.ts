import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../model/consulta.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-form',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './consulta-form.component.html',
  styleUrl: './consulta-form.component.css'
})
export default class ConsultaFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private consultaService = inject(ConsultaService);

  form?: FormGroup;
  consulta?: Consulta;
  errors: string[] = [];



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.consultaService.get(parseInt(id))
      .subscribe(consulta => {
        this.consulta = consulta;
        this.form = this.fb.group({
          motivo: [consulta.motivo,[Validators.required,Validators.minLength(3)]],
          diagnostico: [consulta.diagnostico,[Validators.required,Validators.minLength(6)]],
          tratamiento: [consulta.tratamiento,[Validators.required,Validators.minLength(10)]],
          notas: [consulta.notas,[Validators.required]]
        
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        motivo: ['',[Validators.required,Validators.minLength(3)]],
        diagnostico: ['',[Validators.required,Validators.minLength(6)]],
        tratamiento: ['',[Validators.required,Validators.minLength(10)]],
        notas: ['',[Validators.required]]
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
    let request: Observable<Consulta>;
    if(this.consulta)
    {
       request = this.consultaService.update(this.consulta.id,userForm);
    }
    else
    {
       request = this.consultaService.create(userForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['consulta']);
        }
      })
  }
  cancel() {
    this.router.navigate(['consulta']);
}

}
