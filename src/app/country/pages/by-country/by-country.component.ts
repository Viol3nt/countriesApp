import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  populateCountries(condition: string) {
    this.error = false;
    this.countryService.search(condition, 'name').subscribe(
      (res) => {
        this.countries = res;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }

  suggestions(condition: string) {
    this.error = false;
    this.countryService
      .search(condition, 'name')
      .subscribe(
        (countries) => (this.suggestedCountries = countries.splice(0, 10))
      );
  }
}
