import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input('header') header: string = '';
  @Input('description') description: string;
  @Input('centered') centered: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
