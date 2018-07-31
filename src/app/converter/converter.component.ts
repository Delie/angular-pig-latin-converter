import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StateService } from '../_shared/services/state.service';
import { ConverterService } from './converter.service';
import { RouterModule, Router, Route } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {
  convertText = new FormControl('', Validators.required);
  public convertedText = '';

  constructor(private state: StateService, private converter: ConverterService, private router: Router) { }

  ngOnInit() { }

  submitForm() {
    this.convertedText = this.converter.convert(this.convertText.value);

    // Save history
    let history = this.state.get('History');
    history.unshift({ text: this.convertText.value, result: this.convertedText });
    if (history.length > 10)
      history.splice(10, 1);
    this.state.set('History', history);
  }

  reset() {
    this.convertedText = '';
  }

  viewHistory() {
    this.router.navigate(['./history']);
  }
}
