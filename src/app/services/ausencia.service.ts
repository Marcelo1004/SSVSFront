import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Usuarios } from "../model/usuarios.interface";
import { Asegurados } from "../model/asegurados.interface";
import { Ausencia } from "../model/ausencia.interface";



@Injectable({
    providedIn: 'root'
})

export class AusenciaService{
    private http = inject(HttpClient);

    list(){
        return this.http.get<Ausencia[]>('http://localhost:8080/api/ausencia')
    }
    get(id:number){
        return this.http.get<Ausencia>(`http://localhost:8080/api/ausencia/${id}`)
    }
    create(ausencia:Ausencia){
        return this.http.post<Ausencia>('http://localhost:8080/api/ausencia',ausencia);
    }
    update(id:number,ausencia:Ausencia){
        return this.http.put<Ausencia>(`http://localhost:8080/api/ausencia/${id}`,ausencia);
    }
    delete(id:number){
        return this.http.delete<void>(`http://localhost:8080/api/ausencia/${id}`);
    }
}