import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



interface Rol{
  id: number;
  name: string;
}
@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export default class RolesListComponent {
  roles: Rol[] = [
    { id: 1, name: 'Juan'},
    { id: 2, name: 'María'},
    { id: 3, name: 'Luis', }
  ];

}
