import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClient } from '../interfaces';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.css']
})
export class FatherSonComponent {
  @Input() client?: IClient;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdated = new EventEmitter<IClient>();


  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

  onChange(id: number) {
    if (!this.client) return;
    this.client = { ...this.client, id };
    this.onClientUpdated.emit({ ...this.client });
  }
}
