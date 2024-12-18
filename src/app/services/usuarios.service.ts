import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";



@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Usuarios[]>('http://localhost:8080/api/usuarios')
    }
    get(id:number){
        return this.http.get<Usuarios>(`http://localhost:8080/api/usuarios/${id}`)
    }
    create(usuarios:Usuarios){
        return this.http.post<Usuarios>('http://localhost:8080/api/usuarios',usuarios);
    }
    update(id:number,usuarios:Usuarios){
        return this.http.put<Usuarios>(`http://localhost:8080/api/usuarios/${id}`,usuarios);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/usuarios/${id}`);
    }
}