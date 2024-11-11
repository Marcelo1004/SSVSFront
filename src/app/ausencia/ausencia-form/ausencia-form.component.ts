import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AusenciaService } from '../../services/ausencia.service';
import { Ausencia } from '../../model/ausencia.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ausencia-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './ausencia-form.component.html',
  styleUrl: './ausencia-form.component.css'
})
export default class AusenciaFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private ausenciaService = inject(AusenciaService);

  form?: FormGroup;
 ausencia?: Ausencia;
  errors: string[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.ausenciaService.get(parseInt(id))
      .subscribe(ausencia => {
        this.ausencia = ausencia;
        this.form = this.fb.group({
          descrip: [ausencia.descrip,[Validators.required,]],
          estado: [ausencia.estado,[Validators.required,]],
          dia: [ausencia.dia,[Validators.required,Validators.min(1), Validators.max(31)]],
          mes: [ausencia.mes,[Validators.required,Validators.min(1), Validators.max(12)]],
          anio: [ausencia.anio,[Validators.required,Validators.min(2023), Validators.max(2025)]],
          
      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        descrip: ['',[Validators.required]],
        estado: ['',[Validators.required]],
        dia: ['',[Validators.required,Validators.min(1), Validators.max(31)]],
        mes: ['',[Validators.required,Validators.min(1), Validators.max(12)]],
        anio: ['',[Validators.required,Validators.min(2023), Validators.max(2025)]]
    
      });
    }
  }
  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
  
    const ausenForm =this.form!.value;
    let request: Observable<Ausencia>;
    if(this.ausencia)
    {
       request = this.ausenciaService.update(this.ausencia.id,ausenForm);
    }
    else
    {
       request = this.ausenciaService.create(ausenForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['ausencia']);
        }
      })

    
  }


}
