import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PermisoService } from '../../services/permisos.service';
import { Permisos } from '../../model/permisos.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-permisos-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './permisos-form.component.html',
  styleUrl: './permisos-form.component.css'
})
export default class PermisosFormComponent implements OnInit{
  
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private permisoService = inject(PermisoService);
  form?: FormGroup;
  permiso?: Permisos;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.permisoService.get(parseInt(id))
      .subscribe(permiso => {
        this.permiso = permiso;
        this.form = this.fb.group({

          nombre: [permiso.nombre,[Validators.required]],
          descripcion: [permiso.descripcion,[Validators.required]]

      
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
    const userForm =this.form!.value;
    let request: Observable<Permisos>;
    if(this.permiso)
    {
       request = this.permisoService.update(this.permiso.id,userForm);
    }
    else
    {
       request = this.permisoService.create(userForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['permisos']);
        }
      })
  }
  cancel() {
    this.router.navigate(['permisos']);
}

}
