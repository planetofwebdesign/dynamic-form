import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  templateUrl: 'form-button.component.html'
})
export class FormButtonComponent {
  config;
  group: FormGroup;
}