import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Asegurados } from "../model/asegurados.interface";
import { Consulta } from "../model/consulta.interface";



@Injectable({
    providedIn: 'root'
})

export class ConsultaService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Consulta[]>('http://localhost:8080/api/consulta')
    }
    get(id:number){
        return this.http.get<Consulta>(`http://localhost:8080/api/consulta/${id}`)
    }
    create(consulta:Consulta){
        return this.http.post<Consulta>('http://localhost:8080/api/consulta',consulta);
    }
    update(id:number,consulta:Consulta){
        return this.http.put<Consulta>(`http://localhost:8080/api/consulta/${id}`,consulta);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/consulta/${id}`);
    }
}