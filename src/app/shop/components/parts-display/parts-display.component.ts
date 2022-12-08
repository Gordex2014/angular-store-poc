import { Component, Input, OnInit } from '@angular/core';
import { Part } from '../../../models';

@Component({
  selector: 'app-parts-display[parts]',
  templateUrl: './parts-display.component.html',
  styleUrls: ['./parts-display.component.scss'],
})
export class PartsDisplayComponent implements OnInit {
  @Input() parts: Part[] = [];

  displayedColumns: string[] = [
    'name',
    'price',
    'currency',
    'stock',
    'unit',
    'description',
  ];

  constructor() {}

  ngOnInit(): void {}
}
