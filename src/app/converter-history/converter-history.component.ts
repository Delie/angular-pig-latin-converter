import { Component, OnInit } from '@angular/core';
import { StateService } from '../_shared/services/state.service';

@Component({
  selector: 'app-converter-history',
  templateUrl: './converter-history.component.html',
  styleUrls: ['./converter-history.component.scss']
})
export class ConverterHistoryComponent implements OnInit {
  public history = [];
  constructor(private state: StateService) {
    this.loadHistory();
  }

  ngOnInit() {
  }

  loadHistory() {
    this.history = this.state.get('History');
  }
}
