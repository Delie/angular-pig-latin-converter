import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  convertText = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('tester!');
  }
}
