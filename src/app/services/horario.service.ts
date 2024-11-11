import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";
import { Especialidad } from "../model/especialidad.interface";
import { Horario } from "../model/horario.interface";



@Injectable({
    providedIn: 'root'
})

export class HorarioService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Horario[]>('http://localhost:8080/api/horario')
    }
    get(id:number){
        return this.http.get<Horario>(`http://localhost:8080/api/horario/${id}`)
    }
    create(horario:Horario){
        return this.http.post<Horario>('http://localhost:8080/api/horario',horario);
    }
    update(id:number,horario:Horario){
        return this.http.put<Horario>(`http://localhost:8080/api/horario/${id}`,horario);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/horario/${id}`);
    }
}