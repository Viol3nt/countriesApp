import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(condition: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${condition}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(condition: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${condition}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this._apiUrl}/idd/${id}`;
    return this.http.get<Country>(url);
  }
}
