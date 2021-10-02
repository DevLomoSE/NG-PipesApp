import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre!: string;
  gender!: string;
  
  persona?: Persona;
  personas: Persona[] = [
    {nombre:'jonathan', genero:'masculino'},
    {nombre:'maria', genero:'femenino'},
    {nombre:'pedro', genero:'masculino'},
    {nombre:'juan', genero:'masculino'},
    {nombre:'martha', genero:'femenino'},
    {nombre:'alicia', genero:'femenino'},
    {nombre:'dilton', genero:'masculino'},
  ];
  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla',
    'other':this.nombre
  };
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  clientes: string[] = ['ximena','cristobal','angel','vanessa'];

  randomIndex!: number;
  MIN: number = 1;

  constructor() {
    this.randomIndex = this.getRandomIndex();
    this.getPersona();
  }

  ngOnInit(): void {
  }

  reload(): void{
    this.randomIndex = this.getRandomIndex();
    this.getPersona();
  }

  getRandomIndex(): number{
    return Math.floor(Math.random()*(this.personas.length - this.MIN)+this.MIN);
  }

  getPersona(): void{
    let persona: Persona = this.personas[(this.randomIndex < this.personas.length) 
                                          ? this.randomIndex 
                                          : 0];
    this.nombre = (persona) ? persona.nombre:'';
    this.gender = (persona) ? persona.genero:'';
    this.persona = persona;
  }

  deletePersona(): void{
    this.personas.splice((this.randomIndex < this.personas.length) 
                                          ? this.randomIndex 
                                          : 0,1);
    this.reload();
  }

  myObservable = interval(500);

  myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('fin de myPromise')
    }, 3500);
  })

}
