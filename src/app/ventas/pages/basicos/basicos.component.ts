import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'jonathan';
  nombreUpper: string = 'JONATHAN';
  nombreComplete: string = 'jOnAthAN GuzMaN';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
