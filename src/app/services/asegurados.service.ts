import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Asegurados } from "../model/asegurados.interface";



@Injectable({
    providedIn: 'root'
})

export class AseguradoService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Asegurados[]>('http://localhost:8080/api/asegurados')
    }
    get(id:number){
        return this.http.get<Asegurados>(`http://localhost:8080/api/asegurados/${id}`)
    }
    create(asegurados:Asegurados){
        return this.http.post<Asegurados>('http://localhost:8080/api/asegurados',asegurados);
    }
    update(id:number,asegurados:Asegurados){
        return this.http.put<Asegurados>(`http://localhost:8080/api/asegurados/${id}`,asegurados);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/asegurados/${id}`);
    }
}