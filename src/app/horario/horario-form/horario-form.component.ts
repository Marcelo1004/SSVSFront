import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HorarioService } from '../../services/horario.service';
import { Horario } from '../../model/horario.interface';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.css'],
})
export default class HorarioFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private horarioService = inject(HorarioService);

  form!: FormGroup;
  horario?: Horario;
  errors: string[] = [];
  
  isEditing = false;
  horarioId!: number;

   diasSemana: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];


  ngOnInit(): void {
    this.form = this.fb.group({
      diasSemana: this.fb.array(this.diasSemana.map(() => new FormControl(false))),
      horaInicio: ['', [Validators.required, Validators.min(7), Validators.max(22)]],
      horaFinal: ['', [Validators.required, Validators.min(8), Validators.max(23)]],
      cantidadCupos: ['', [Validators.required, Validators.min(2)]],
    });

    // Obtener el ID del horario de la ruta para cargar los datos en caso de edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.horarioId = +id;
      this.horarioService.get(this.horarioId).subscribe(horario => {
        this.horario = horario;
    
        // Parchar los valores de los otros campos
        this.form.patchValue({
          horaInicio: horario.horaInicio,
          horaFinal: horario.horaFinal,
          cantidadCupos: horario.cantidadCupos,
        });
    
        // Marcar los días seleccionados
        const diasFormArray = this.form.get('diasSemana') as FormArray;
        this.diasSemana.forEach((day, index) => {
          if (horario.diasSemana.includes(day)) {
            diasFormArray.at(index).setValue(true);  // Marcar como verdadero los días seleccionados
          } else {
            diasFormArray.at(index).setValue(false); // Desmarcar los demás
          }
        });
      });
    }
    
  }

  save() {
    const formData = this.form.value;
    const diasSeleccionados = formData.diasSemana
      .map((selected: boolean, index: number) => {
        const day: string = this.diasSemana[index];  // Especificamos que 'day' es un string
        return selected ? day : null;
      })
      .filter((day: string | null) => day !== null);  // También especificamos que 'day' puede ser 'string' o 'null'
  
    const data = {
      ...formData,
      diasSemana: diasSeleccionados,
    };
  
    if (this.isEditing) {
      this.horarioService.update(this.horarioId, data).subscribe({
        next: response => {
          console.log('Horario actualizado:', response);
          this.router.navigate(['horario']);
        },
        error: err => console.error('Error al actualizar el horario:', err)
      });
    } else {
      this.horarioService.create(data).subscribe({
        next: response => {
          console.log('Horario creado:', response);
          this.router.navigate(['horario']);
        },
        error: err => console.error('Error al crear el horario:', err)
      });
    }
  }
  
  

  cancel() {
    this.router.navigate(['horario']);
  }
}
