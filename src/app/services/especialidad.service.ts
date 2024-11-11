import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";
import { Especialidad } from "../model/especialidad.interface";



@Injectable({
    providedIn: 'root'
})

export class EspecialidadService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Especialidad[]>('http://localhost:8080/api/especialidad')
    }
    get(id:number){
        return this.http.get<Especialidad>(`http://localhost:8080/api/especialidad/${id}`)
    }
    create(especialidad:Especialidad){
        return this.http.post<Especialidad>('http://localhost:8080/api/especialidad',especialidad);
    }
    update(id:number,especialidad:Especialidad){
        return this.http.put<Especialidad>(`http://localhost:8080/api/especialidad/${id}`,especialidad);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/especialidad/${id}`);
    }
}