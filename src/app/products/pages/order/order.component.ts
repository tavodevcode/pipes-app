import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public order: string = 'lower';

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      canFly: true,
      color: Color.red,
      name: 'Superman',
    },
    {
      canFly: false,
      color: Color.green,
      name: 'Batman',
    },
    {
      canFly: true,
      color: Color.blue,
      name: 'Robin',
    },
    {
      canFly: false,
      color: Color.black,
      name: 'Joker',
    },
  ];

  public toggleOrderBy?: keyof Hero;

  public onToggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public onTogleOrderBy(value: keyof Hero): void {
    this.toggleOrderBy = value;
  }
}
