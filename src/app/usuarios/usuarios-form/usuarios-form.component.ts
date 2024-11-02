import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuarios } from '../../model/usuarios.interface';


@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css'
})
export default class UsuariosFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  form?: FormGroup;
  usuario?: Usuarios;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.usuarioService.get(parseInt(id))
      .subscribe(usuario => {
        this.usuario = usuario;
        this.form = this.fb.group({
          correo: [usuario.correo,[Validators.email]],
          password: [usuario.password,[Validators.required]],
          nombre: [usuario.nombre,[Validators.required]],
          apellido: [usuario.apellido,[Validators.required]],
          sexo: [usuario.sexo,[Validators.required]],
          fechaNacimiento: [usuario.fechaNacimiento,[Validators.required]],
          estado: [usuario.estado,[Validators.required]]
      
        });

        
      })
    }
    else
    {
      this.form = this.fb.group({
        correo: ['',[Validators.email]],
        password: ['',[Validators.required]],
        nombre: ['',[Validators.required]],
        apellido: ['',[Validators.required]],
        sexo: ['',[Validators.required]],
        fechaNacimiento: ['',[Validators.required]],
        estado: ['',[Validators.required]]
    
      });
    }
  }


  save(){
    const usersForm =this.form!.value;

    if(this.usuario)
    {
      this.usuarioService.update(this.usuario.id,usersForm)
      .subscribe(() =>{
        this.router.navigate(['/']);
      });
    }
    else
    {
      this.usuarioService.create(usersForm)
    .subscribe(() =>{
      this.router.navigate(['/']);
    });
    }

    
  }

}
