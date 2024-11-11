import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuarios } from '../../model/usuarios.interface';



@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export default class UsuariosListComponent  implements OnInit{
  
   private usuarioService = inject(UsuarioService);
   usuarios:Usuarios[]=[];

   ngOnInit(): void {
     this.loadAll();
    }

    loadAll()
    {
      this.usuarioService.list()
     .subscribe((usuarios) =>{
      this.usuarios = usuarios;
     });
    }

    deleteUser(usuarios:Usuarios)
    {
      this.usuarioService.delete(usuarios.id)
      .subscribe(() =>{
        this.loadAll();
      })
    }

}