import { Component, inject, OnInit } from '@angular/core';
import { FichaService } from '../../services/ficha.service';
import { Ficha } from '../../model/ficha.interface';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,DatePipe],
  templateUrl: './ficha-list.component.html',
  styleUrl: './ficha-list.component.css'
})
export default class FichaListComponent implements OnInit {

  private fichaService = inject(FichaService);
   fichas:Ficha[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.fichaService.list()
    .subscribe((ficha) =>{
     this.fichas = ficha;
    });
   }

   deleteFicha(ficha:Ficha)
   {
     this.fichaService.delete(ficha.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }

}
