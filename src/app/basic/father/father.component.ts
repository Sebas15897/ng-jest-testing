import { Component } from '@angular/core';
import { IClient } from '../interfaces';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})

export class FatherComponent {
  client?: IClient;

  onSetClienrt(name: string) {
    this.client = {
      id: 1,
      name: name,
    };
  }
}
