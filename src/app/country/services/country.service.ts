import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  search(condition: string, method: string): Observable<Country[]> {
    const params = new HttpParams().set(
      'fields',
      'name,cca3,cca2,flags,population'
    );
    const url = `${this._apiUrl}/${method}/${condition}`;
    return this.http.get<Country[]>(url, { params }).pipe(tap(console.log));
  }

  searchById(condition: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${condition}`;
    return this.http.get<Country[]>(url);
  }
}
