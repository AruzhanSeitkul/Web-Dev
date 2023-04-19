import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Company} from "../core/models/Company";
const baseUrl = 'http://localhost:8000/api/companies';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(baseUrl);
  }

  get(id: number): Observable<Company> {
    return this.http.get<Company>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
