import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../core/models/Vacancy";
import {VacancyService} from "../../services/vacancy.service";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  compUrl: string = 'http://localhost:8000/api/vacancies/';

  public vacancies: Vacancy[] = [];

  constructor(public authService: AuthService, private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log(this.compUrl)
    this.getVacancies()

  }

  getVacancies(): void {
    this.http.get<Vacancy[]>(this.compUrl).subscribe(
      (data: Vacancy[]) => {
        this.vacancies = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      });
  }

}
