import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Carrera{
    id?:number,
    nombre:string,
    sigla:string,
    sistema_academico:string
}

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private url = 'http://localhost:8090/api/carrera';

    constructor(private http:HttpClient){}

    getData():Observable<any[]>{
        return this.http.get<any[]>(this.url);
    }

    addCarrera(data:Carrera):Observable<Carrera>{
        return this.http.post<Carrera>(this.url,data);
    }

    updateCarreraApi(data:Carrera):Observable<Carrera>{
        const updateUrl = `${this.url}/${data.id}`;
        console.log(updateUrl);
        return this.http.put<Carrera>(updateUrl,data);
    }
    deleteCarrera(data:Carrera):Observable<Carrera>{
        const updateUrl = `${this.url}/${data.id}`;
        return this.http.delete<Carrera>(updateUrl);

    }
}
