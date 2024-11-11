import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";
import { Roles } from "../model/roles.interface";
import { Medicos } from "../model/medicos.interface";



@Injectable({
    providedIn: 'root'
})

export class MedicoService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Medicos[]>('http://localhost:8080/api/medicos')
    }
    get(id:number){
        return this.http.get<Medicos>(`http://localhost:8080/api/medicos/${id}`)
    }
    create(medicos:Medicos){
        return this.http.post<Medicos>('http://localhost:8080/api/medicos',medicos);
    }
    update(id:number,medicos:Medicos){
        return this.http.put<Medicos>(`http://localhost:8080/api/medicos/${id}`,medicos);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/medicos/${id}`);
    }
}