import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface Permiso{
  id: number;
  name: string;
}
@Component({
  selector: 'app-permisos-list',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './permisos-list.component.html',
  styleUrl: './permisos-list.component.css'
})
export default class PermisosListComponent {
  permisos: Permiso[] = [
    { id: 1, name: 'Crear Usuario'},
    { id: 2, name: 'Editar Usuario'},
    { id: 3, name: 'Eliminar Usuario', }
  ];
}
