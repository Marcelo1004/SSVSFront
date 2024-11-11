import { DatePipe } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';
import { Consulta } from '../../model/consulta.interface';

@Component({
  selector: 'app-consulta-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,DatePipe],
  templateUrl: './consulta-list.component.html',
  styleUrl: './consulta-list.component.css'
})
export default class ConsultaListComponent implements OnInit{

  private consultaService = inject(ConsultaService);
   consultas:Consulta[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.consultaService.list()
    .subscribe((consultas) =>{
     this.consultas = consultas;
    });
   }

   deleteCons(consultas:Consulta)
   {
     this.consultaService.delete(consultas.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }

}
