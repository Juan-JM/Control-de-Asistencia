import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface GestionPeriodo {
    id: number;
    gestion: {
        id: number;
        anio: number;
        fechaIni: string;
        fechaFin: string;
    };
    periodo: {
        id: number;
        nombre: string;
    };
    inicio_clase: string;
    fin_clase: string;
    evaluacion1: string;
    evaluacion2?: string;
    evaluacion3?: string;
}

export interface postData {
    id?: number;
    gestion_id:number|undefined;
    periodo_id:number|undefined;
    inicio_clase: string;
    fin_clase: string;
    evaluacion1: string;
    evaluacion2?: string;
    evaluacion3?: string;
}

@Injectable({
    providedIn: 'root'
})
export class GestionPeriodoApi {
    private url = 'http://localhost:8090/api/gestion-periodo';

    constructor(private http:HttpClient){}

    getData():Observable<any[]>{
        return this.http.get<any[]>(this.url);
    }

    add(data:postData):Observable<postData>{
        return this.http.post<postData>(this.url,data);
    }

    update(data:postData):Observable<postData>{
        const updateUrl = `${this.url}/${data.id}`; 
        return this.http.put<postData>(updateUrl,data);
    }

    delete(data:postData):Observable<postData>{
        const updateUrl = `${this.url}/${data.id}`; 
        return this.http.delete<postData>(updateUrl);
    }
}