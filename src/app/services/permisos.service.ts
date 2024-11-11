import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";



@Injectable({
    providedIn: 'root'
})

export class PermisoService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Permisos[]>('http://localhost:8080/api/permisos')
    }
    get(id:number){
        return this.http.get<Permisos>(`http://localhost:8080/api/permisos/${id}`)
    }
    create(permisos:Permisos){
        return this.http.post<Permisos>('http://localhost:8080/api/permisos',permisos);
    }
    update(id:number,permisos:Permisos){
        return this.http.put<Permisos>(`http://localhost:8080/api/permisos/${id}`,permisos);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/permisos/${id}`);
    }
}