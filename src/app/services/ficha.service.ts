import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Asegurados } from "../model/asegurados.interface";
import { Ficha } from "../model/ficha.interface";



@Injectable({
    providedIn: 'root'
})

export class FichaService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Ficha[]>('http://localhost:8080/api/ficha')
    }
    get(id:number){
        return this.http.get<Ficha>(`http://localhost:8080/api/ficha/${id}`)
    }
    create(ficha:Ficha){
        return this.http.post<Ficha>('http://localhost:8080/api/ficha',ficha);
    }
    update(id:number,ficha:Ficha){
        return this.http.put<Ficha>(`http://localhost:8080/api/ficha/${id}`,ficha);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/ficha/${id}`);
    }
}