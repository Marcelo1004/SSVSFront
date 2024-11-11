import { Component, inject, OnInit } from '@angular/core';
import { AusenciaService } from '../../services/ausencia.service';
import { Ausencia } from '../../model/ausencia.interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ausencia-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './ausencia-list.component.html',
  styleUrl: './ausencia-list.component.css'
})
export  default class AusenciaListComponent implements OnInit {

  private ausenciaService = inject(AusenciaService);
   ausencias:Ausencia[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.ausenciaService.list()
    .subscribe((ausencias) =>{
     this.ausencias = ausencias;
    });
   }

   deleteAusencia(ausencias:Ausencia)
   {
     this.ausenciaService.delete(ausencias.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }

}
