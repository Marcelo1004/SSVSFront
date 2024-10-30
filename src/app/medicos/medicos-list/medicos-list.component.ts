import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Medico {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  speciality: string;
  startedAt: Date; 
}

@Component({
  selector: 'app-medicos-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './medicos-list.component.html',
  styleUrl: './medicos-list.component.css'
})
export default class MedicosListComponent {
  medicos: Medico[] = [
    { id: 1, name: 'Juan', lastname: 'Pérez', email: 'juan.perez@example.com', phone: '123456789', speciality:'Cirujano',startedAt: new Date('2023-01-15') },
    { id: 2, name: 'María', lastname: 'Gómez', email: 'maria.gomez@example.com', phone: '987654321', speciality:'Nutricionista',startedAt: new Date('2023-02-20') },
    { id: 3, name: 'Luis', lastname: 'Martínez', email: 'luis.martinez@example.com', phone: '456123789',speciality:'Enfermero', startedAt: new Date('2023-03-10') },
  ];

}
