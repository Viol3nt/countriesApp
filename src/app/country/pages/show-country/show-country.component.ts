import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.countryService
    //     .getCountryById(id)
    //     .subscribe((country) => (this.country = country[0]));
    // });
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchById(id)))
      .subscribe((country) => (this.country = country[0]));
  }
}
