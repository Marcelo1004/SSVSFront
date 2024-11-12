import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-atencion-dash',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './atencion-dash.component.html',
  styleUrl: './atencion-dash.component.css'
})
export default class AtencionDashComponent {
  private router = inject(Router);

  gesp()
  {
    this.router.navigate(['especialidad']);
  }
  gmed()
  {
    this.router.navigate(['medicos']);
  }

  ghora()
  {
    this.router.navigate(['horario']);
  }

  gficha()
  {
    this.router.navigate(['ficha']);
  }
  gausencia()
  {
    this.router.navigate(['ausencia']);
  }
  greceta()
  {
    this.router.navigate(['receta']);
  }
  gconsulta()
  {
    this.router.navigate(['consulta']);
  }
}
