import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermisoService } from '../../services/permisos.service';
import { Permisos } from '../../model/permisos.interface';

@Component({
  selector: 'app-permisos-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './permisos-list.component.html',
  styleUrl: './permisos-list.component.css'
})
export default class PermisosListComponent implements OnInit{

  private permisoService = inject(PermisoService);
   permisos:Permisos[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.permisoService.list()
    .subscribe((permisos) =>{
     this.permisos = permisos;
    });
   }

   deletePerm(permisos:Permisos)
   {
     this.permisoService.delete(permisos.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }
  
}
