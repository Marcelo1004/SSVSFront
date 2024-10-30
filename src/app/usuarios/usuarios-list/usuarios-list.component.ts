import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

interface Usuario {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string; // Mantener esto para uso interno
  createdAt: Date;
}

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export default class UsuariosListComponent  {



    usuarios:  Usuario[]=[
      { id: 1, name: 'Juan', lastname: 'Pérez', email: 'juan@example.com', password: '1234', createdAt: new Date() },
      { id: 2, name: 'María', lastname: 'Gómez', email: 'maria@example.com', password: 'abcd', createdAt: new Date() },
      { id: 3, name: 'Carlos', lastname: 'Sánchez', email: 'carlos@example.com', password: 'qwerty', createdAt: new Date() },
      { id: 4, name: 'Ana', lastname: 'Martínez', email: 'ana@example.com', password: 'password', createdAt: new Date() }
    ];
  


}