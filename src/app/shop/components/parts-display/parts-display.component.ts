import { Component, Input, OnInit } from '@angular/core';
import { Part } from '../../../models';

@Component({
  selector: 'app-parts-display',
  templateUrl: './parts-display.component.html',
  styleUrls: ['./parts-display.component.scss'],
})
export class PartsDisplayComponent {
  @Input() parts: Part[] = [];

  displayedColumns: string[] = Object.keys(this.parts);

  constructor() {
    console.log(this.displayedColumns);
  }
}
