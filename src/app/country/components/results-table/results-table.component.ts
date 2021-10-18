import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: [],
})
export class ResultsTableComponent {
  @Input()
  countries: Country[] = [];

  constructor() {}
}
