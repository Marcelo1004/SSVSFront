import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { Asegurados } from '../../model/asegurados.interface';
import { AseguradoService } from '../../services/asegurados.service';
import { Observable } from 'rxjs';
import { response } from 'express';



@Component({
  selector: 'app-asegurados-forms',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule ],
  templateUrl: './asegurados-forms.component.html',
  styleUrl: './asegurados-forms.component.css'
})
export default class AseguradosFormsComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private aseguradoService = inject(AseguradoService);

  form?: FormGroup;
  asegurado?: Asegurados;
  errors: string[] = [];

  //funcion de validacion de sexo
  sexoValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = control.value === 'F' || control.value === 'M';
      return isValid ? null : { invalidSexo: true };
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.aseguradoService.get(parseInt(id))
      .subscribe(asegurado => {
        this.asegurado = asegurado;
        this.form = this.fb.group({
          tipoSangre: [asegurado.tipoSangre,[Validators.required,]],
          sexo: [asegurado.sexo, [Validators.required,this.sexoValidator()]],
          dia: [asegurado.dia,[Validators.required,Validators.min(1), Validators.max(31)]],
          mes: [asegurado.mes,[Validators.required,Validators.min(1), Validators.max(12)]],
          anio: [asegurado.anio,[Validators.required,Validators.min(1910), Validators.max(2024)]],
          
      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        tipoSangre: ['',[Validators.required]],
        sexo: ['', [Validators.required,this.sexoValidator()]],
        dia: ['',[Validators.required,Validators.min(1), Validators.max(31)]],
        mes: ['',[Validators.required,Validators.min(1), Validators.max(12)]],
        anio: ['',[Validators.required,Validators.min(1910), Validators.max(2024)]]
    
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
    let request: Observable<Asegurados>;
    if(this.asegurado)
    {
       request = this.aseguradoService.update(this.asegurado.id,userForm);
    }
    else
    {
       request = this.aseguradoService.create(userForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['asegurados']);
        }
      })
  }
  cancel() {
    this.router.navigate(['asegurados']);
}


}