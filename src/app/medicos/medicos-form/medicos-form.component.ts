import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicoService } from '../../services/medicos.service';
import { Medicos } from '../../model/medicos.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicos-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './medicos-form.component.html',
  styleUrl: './medicos-form.component.css'
})
export default class MedicosFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private medicoService = inject(MedicoService);

  form?: FormGroup;
  medicos?: Medicos;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.medicoService.get(parseInt(id))
      .subscribe(medicos => {
        this.medicos = medicos;
        this.form = this.fb.group({
          item: [medicos.item,[Validators.required]],
      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        item: ['',[Validators.required]],   
      });
    }
  }


  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
    const medForm =this.form!.value;
    let request: Observable<Medicos>;
    if(this.medicos)
    {
       request = this.medicoService.update(this.medicos.id,medForm);
    }
    else
    {
       request = this.medicoService.create(medForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['medicos']);
        }
      })

   
  }
  cancel() {
    this.router.navigate(['permisos']);
}

}
