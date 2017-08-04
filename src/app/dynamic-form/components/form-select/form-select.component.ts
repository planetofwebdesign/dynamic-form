import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  templateUrl: 'form-select.component.html'
})
export class FormSelectComponent {
  config;
  group: FormGroup;
}