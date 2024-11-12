import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";
import { Roles } from "../model/roles.interface";
import { Medicos } from "../model/medicos.interface";
import { Receta } from "../model/receta.interface";



@Injectable({
    providedIn: 'root'
})

export class RecetaService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Receta[]>('http://localhost:8080/api/receta')
    }
    get(id:number){
        return this.http.get<Receta>(`http://localhost:8080/api/receta/${id}`)
    }
    create(receta:Receta){
        return this.http.post<Receta>('http://localhost:8080/api/receta',receta);
    }
    update(id:number,receta:Receta){
        return this.http.put<Receta>(`http://localhost:8080/api/receta/${id}`,receta);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/receta/${id}`);
    }
}