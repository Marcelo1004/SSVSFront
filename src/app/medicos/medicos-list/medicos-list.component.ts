import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicoService } from '../../services/medicos.service';
import { Medicos } from '../../model/medicos.interface';



@Component({
  selector: 'app-medicos-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './medicos-list.component.html',
  styleUrl: './medicos-list.component.css'
})
export default class MedicosListComponent implements OnInit{
  private medicoService = inject(MedicoService);
   medicos:Medicos[]=[];

   ngOnInit(): void {
     this.loadAll();
    }

    loadAll()
    {
      this.medicoService.list()
     .subscribe((medicos) =>{
      this.medicos = medicos;
     });
    }

    deleteMedico(medicos:Medicos)
    {
      this.medicoService.delete(medicos.id)
      .subscribe(() =>{
        this.loadAll();
      })
    }

}
