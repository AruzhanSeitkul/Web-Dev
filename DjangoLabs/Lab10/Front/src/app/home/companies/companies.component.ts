import {Component} from '@angular/core';
import {Company} from "../../core/models/Company";
import {CompaniesService} from "../../services/companies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  companies?: Company[];
  // currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  company: string = '';

  constructor(private activRoute: ActivatedRoute, private companiesService: CompaniesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companiesService.getAll()
      .subscribe(
        (data: Company[] | undefined) => {
          this.companies = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        });
  }

  getCompanyId(i: number) {
    this.router.navigate([`companies/${i}`])
  }
}
