import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  buscarPais(termino: string): Observable<Country[]> {
    console.log('Buscando país por nombre');
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapitarl(termino: string): Observable<Country[]> {
    console.log('Buscando país por capital');
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    console.log('Detalle País');
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(id: string): Observable<Country[]> {
    console.log('Buscando país por región');
    const url = `${this.apiUrl}/region/${id}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
