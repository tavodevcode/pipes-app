import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'gustavo';
  public nameUpper: string = 'GUSTAVO';
  public fullName: string = 'gustavo HERNANDEZ';

  public date: Date = new Date();
}
