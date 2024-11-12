import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Receta } from '../../model/receta.interface';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-receta-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './receta-list.component.html',
  styleUrl: './receta-list.component.css'
})
export default class RecetaListComponent implements OnInit{

  private recetaService = inject(RecetaService);
  recetas:Receta[]=[];

  
  ngOnInit(): void {
   this.loadAll();
  }

  loadAll()
  {
    this.recetaService.list()
   .subscribe((receta) =>{
    this.recetas = receta;
   });
  }

  deleteCons(receta:Receta)
  {
    this.recetaService.delete(receta.id)
    .subscribe(() =>{
      this.loadAll();
    })
  }

}
