import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../core/models/Company";
import {Vacancy} from "../core/models/Vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private readonly apiUrl = 'http://localhost:8000/api/vacancies';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getById(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}/${id}`);
  }
}
