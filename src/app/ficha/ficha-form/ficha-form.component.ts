import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Ficha } from '../../model/ficha.interface';
import { Router } from 'express';
import { FichaService } from '../../services/ficha.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ficha-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './ficha-form.component.html',
  styleUrl: './ficha-form.component.css'
})
export default class FichaFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fichaService = inject(FichaService);

  form!: FormGroup; // 
  ficha?: Ficha;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.fichaService.get(parseInt(id))
        .subscribe(ficha => {
          this.ficha = ficha;
          this.form = this.fb.group({
            
            estado: [ficha.estado, [Validators.required]]
          });
        });
    } else {
      this.form = this.fb.group({
        estado: ['', [Validators.required]]
      });
    }
  }

  save(){
    if(this.form?.invalid)
    {
      this.form.markAllAsTouched();
      return ;
    }
  
    const fichaForm =this.form!.value;
    let request: Observable<Ficha>;
    if(this.ficha)
    {
       request = this.fichaService.update(this.ficha.id,fichaForm);
    }
    else
    {
       request = this.fichaService.create(fichaForm);
    }

    request
      .subscribe({
        next: () => {
        
          this.router.navigate(['ficha']);
        }
      })

  }
  cancel() {
    this.router.navigate(['ficha']);
}

}
