import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RolService } from '../../services/roles.service';
import { Roles } from '../../model/roles.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roles-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './roles-form.component.html',
  styleUrl: './roles-form.component.css'
})
export default class RolesFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private rolService = inject(RolService);

  form?: FormGroup;
  rol?: Roles;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.rolService.get(parseInt(id))
      .subscribe(rol => {
        this.rol = rol;
        this.form = this.fb.group({
          nombre: [rol.nombre,[Validators.required]],
      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        nombre: ['',[Validators.required]],   
      });
    }
  }


  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
    const rolForm =this.form!.value;
    let request: Observable<Roles>;
    if(this.rol)
    {
       request = this.rolService.update(this.rol.id,rolForm);
    }
    else
    {
       request = this.rolService.create(rolForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['roles']);
        }
      })

   
  }
  cancel() {
    this.router.navigate(['roles']);
}


}
