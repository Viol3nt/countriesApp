import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  populateCountries(condition: string) {
    this.error = false;
    this.countryService.search(condition, 'capital').subscribe(
      (res) => {
        this.countries = res;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
