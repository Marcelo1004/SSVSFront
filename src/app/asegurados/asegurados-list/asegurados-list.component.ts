import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AseguradoService } from '../../services/asegurados.service';
import { Asegurados } from '../../model/asegurados.interface';




@Component({
  selector: 'app-asegurados-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './asegurados-list.component.html',
  styleUrl: './asegurados-list.component.css'
})
export default class AseguradosListComponent implements OnInit{
  

  private aseguradoService = inject(AseguradoService);
  asegurados:Asegurados[]=[];

   ngOnInit(): void {
     this.loadAll();
    }

    loadAll()
    {
      this.aseguradoService.list()
     .subscribe((asegurados) =>{
      this.asegurados = asegurados;
     });
    }

    deleteAsegurado(asegurados:Asegurados)
    {
      this.aseguradoService.delete(asegurados.id)
      .subscribe(() =>{
        this.loadAll();
      })
    }

}
