import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-dash',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users-dash.component.html',
  styleUrl: './users-dash.component.css'
})
export default class UsersDashComponent {
  private router = inject(Router);
guser()
  {
    this.router.navigate(['usuarios']);
  }

  grol()
  {
    this.router.navigate(['roles']);
  }

  gperm()
  {
    this.router.navigate(['permisos']);
  }

  gaseg()
  {
    this.router.navigate(['asegurados']);
  }



}
