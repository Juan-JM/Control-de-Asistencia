import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Gestion{
    id?:number,
    anio:number,
    fechaIni:string,
    fechaFin:string
}

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private url = 'http://localhost:8090/api/gestion';

    constructor(private http:HttpClient){}

    getData():Observable<any[]>{
        return this.http.get<any[]>(this.url);
    }

    addGestion(data:Gestion):Observable<Gestion>{
        return this.http.post<Gestion>(this.url,data);
    }

    updateGestionApi(data:Gestion):Observable<Gestion>{
        const updateUrl = `${this.url}/${data.id}`; 
        console.log(updateUrl);
        return this.http.put<Gestion>(updateUrl,data);
    }
    deleteGestion(data:Gestion):Observable<Gestion>{
        const updateUrl = `${this.url}/${data.id}`; 
        return this.http.delete<Gestion>(updateUrl);

    }
}