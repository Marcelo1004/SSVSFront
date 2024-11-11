import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuarios } from '../../model/usuarios.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css'] 
})
export default class UsuariosFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  form!: FormGroup; // 
  usuarios?: Usuarios;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.get(parseInt(id))
        .subscribe(usuarios => {
          this.usuarios = usuarios;
          this.form = this.fb.group({
            ci: [usuarios.ci, [Validators.required,Validators.pattern('^[0-9]{7}$')]],
            correo: [usuarios.correo, [Validators.email, Validators.required]],
            password: [usuarios.password, [Validators.required,Validators.minLength(8), Validators.maxLength(16)]],      
            nombre: [usuarios.nombre, [Validators.required]],
            apellido: [usuarios.apellido, [Validators.required]],
            estado: [usuarios.estado, [Validators.required]]
          });
        });
    } else {
      this.form = this.fb.group({
        ci: ['', [ Validators.required,Validators.pattern('^[0-9]{7}$')]],
        correo: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(8)]],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      });
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.error('Formulario inválido');
      return;
    }

    const userForm =this.form!.value;
    let request: Observable<Usuarios>;
    if(this.usuarios)
    {
       request = this.usuarioService.update(this.usuarios.id,userForm);
    }
    else
    {
       request = this.usuarioService.create(userForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['usuarios']);
        }
      })
  }
  cancel() {
    this.router.navigate(['usuarios']);
}
}
