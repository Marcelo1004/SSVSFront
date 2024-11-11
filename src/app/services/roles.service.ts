import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Permisos } from "../model/permisos.interface";
import { Roles } from "../model/roles.interface";



@Injectable({
    providedIn: 'root'
})

export class RolService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Roles[]>('http://localhost:8080/api/roles')
    }
    get(id:number){
        return this.http.get<Roles>(`http://localhost:8080/api/roles/${id}`)
    }
    create(roles:Roles){
        return this.http.post<Roles>('http://localhost:8080/api/roles',roles);
    }
    update(id:number,roles:Roles){
        return this.http.put<Roles>(`http://localhost:8080/api/roles/${id}`,roles);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/roles/${id}`);
    }
}