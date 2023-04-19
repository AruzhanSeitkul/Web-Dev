import {Company} from "./Company";

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
}
