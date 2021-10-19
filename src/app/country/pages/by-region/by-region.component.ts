import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  error: boolean = false;
  countries: Country[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor(private countryService: CountryService) {}

  getCssClass(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary text-white'
      : 'btn btn-outline-primary';
  }

  populateCountries(condition: string) {
    if (condition === this.activeRegion) return;
    this.activeRegion = condition;
    this.countries = [];
    this.error = false;
    this.countryService.search(condition, 'region').subscribe(
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
