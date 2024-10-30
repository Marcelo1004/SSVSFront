import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Asegurado {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  createdAt: Date; // Cambiado a Date
}

@Component({
  selector: 'app-asegurados-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './asegurados-list.component.html',
  styleUrl: './asegurados-list.component.css'
})
export default class AseguradosListComponent {
  asegurados: Asegurado[] = [
    { id: 1, name: 'Juan', lastname: 'Pérez', email: 'juan.perez@example.com', phone: '123456789', createdAt: new Date('2023-01-15') },
    { id: 2, name: 'María', lastname: 'Gómez', email: 'maria.gomez@example.com', phone: '987654321', createdAt: new Date('2023-02-20') },
    { id: 3, name: 'Luis', lastname: 'Martínez', email: 'luis.martinez@example.com', phone: '456123789', createdAt: new Date('2023-03-10') },
  ];

}
