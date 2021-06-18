import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  errorFlag: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.errorFlag = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (err) => {
        this.errorFlag = true;
        this.countries = [];
      }
    );
  }

  sugerencia(termino: string): void {
    this.errorFlag = false;
    // TODO: crear sugerencias
  }
}
