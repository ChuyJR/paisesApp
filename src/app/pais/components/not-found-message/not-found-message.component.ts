import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-message',
  templateUrl: './not-found-message.component.html',
  styleUrls: ['./not-found-message.component.css'],
})
export class NotFoundMessageComponent implements OnInit {
  @Input('termino') termino: string = '';
  @Input('errorFlag') errorFlag: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getClasesCSS(): string {
    return this.errorFlag === true
      ? 'alert alert-danger animate__animated animate__fadeIn'
      : 'alert alert-danger animate__animated animate__fadeOut';
  }
}
