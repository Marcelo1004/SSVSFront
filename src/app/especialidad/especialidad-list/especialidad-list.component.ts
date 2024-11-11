import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from 'express';
import { EspecialidadService } from '../../services/especialidad.service';
import { Especialidad } from '../../model/especialidad.interface';

@Component({
  selector: 'app-especialidad-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './especialidad-list.component.html',
  styleUrl: './especialidad-list.component.css'
})
export default class EspecialidadListComponent implements OnInit{

  private especialidadService = inject(EspecialidadService);
   especialidades:Especialidad[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.especialidadService.list()
    .subscribe((especialidades) =>{
     this.especialidades = especialidades;
    });
   }

   deletePerm(especialidades:Especialidad)
   {
     this.especialidadService.delete(especialidades.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }

}
