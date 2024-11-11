import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HorarioService } from '../../services/horario.service';
import { Horario } from '../../model/horario.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horario-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,DatePipe],
  templateUrl: './horario-list.component.html',
  styleUrl: './horario-list.component.css'
})
export default class HorarioListComponent implements OnInit{
  private horarioService = inject(HorarioService);
  horarios:Horario[]=[];

   
   ngOnInit(): void {
    this.loadAll();
   }

   loadAll()
   {
     this.horarioService.list()
    .subscribe((horarios) =>{
     this.horarios = horarios;
    });
   }

   deleteHora(horarios:Horario)
   {
     this.horarioService.delete(horarios.id)
     .subscribe(() =>{
       this.loadAll();
     })
   }
   translateDays(days: string[]): string {
    const daysMap: { [key: string]: string } = {
      'L': 'Lunes',
      'M': 'Martes',
      'X': 'Miércoles',
      'J': 'Jueves',
      'V': 'Viernes',
      'S': 'Sábado',
      'D': 'Domingo'
    };
  
    // Mapea los días y filtra los no válidos, luego une en una cadena
    return days.map(day => daysMap[day] || day).join(', ');
  }

}
