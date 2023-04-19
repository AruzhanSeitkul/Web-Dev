import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path:'companies/:id', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
