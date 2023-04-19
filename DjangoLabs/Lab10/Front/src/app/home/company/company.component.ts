import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "../../services/companies.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../core/models/Company";
import {Observable} from "rxjs";
import {Vacancy} from "../../core/models/Vacancy";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  comID: number;
  compUrl: string = 'http://localhost:8000/api/companies/';
  curCompany: { name: string; description: string; city: string; address: string; } = {
    name: '',
    description: '',
    city: '',
    address: ''
  };
  public vacancies: Vacancy[] = [];

  constructor(private hhtp: HttpClient, private compService: CompaniesService, private activRoute: ActivatedRoute) {
    this.comID = 0;
  }

  ngOnInit(): void {
    this.comID = Number(this.activRoute.snapshot.params['id']) + 1
    this.getCompany(this.comID)
    this.compUrl = this.compUrl + this.comID + '/vacancies'
    this.getVacancies()
    console.log(this.compUrl)

  }

  getCompany(id: number): void {
    this.compService.get(id)
      .subscribe(
        data => {
          this.curCompany = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getVacancies(): void {
    this.getAllByCompany()
      .subscribe(
        (data: Vacancy[]) => {
          this.vacancies = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        });
  }

  getAllByCompany(): Observable<Vacancy[]> {
    return this.hhtp.get<Vacancy[]>(this.compUrl);
  }

}
