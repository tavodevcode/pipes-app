import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Gustavo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public onClient(): void {
    this.name = 'Tania ❤';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'Gustavo',
    'Tania',
    'Luis',
    'Maria',
    'Pedro',
    'Ana',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public onDeleteClient(): void {
    this.clients.shift();
  }

  //  KeyValue Pipe
  public person = {
    name: 'Gustavo',
    age: 35,
    address: 'Calle 123',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa terminada...');
    }, 3500);
  });
}
