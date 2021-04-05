import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-view',
  templateUrl: './toolbar-view.component.html',
  styleUrls: ['./toolbar-view.component.scss']
})
export class ToolbarViewComponent implements OnInit {

  @Input('type') type: number;
  @Output('onDataDisplay') dataDisplay: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    if (event.target.value === 'on') {
      event.target.value = 'off';
      this.dataDisplay.emit('off');
    } else {
      event.target.value = 'on';
      this.dataDisplay.emit('on');
    }
  }
}
