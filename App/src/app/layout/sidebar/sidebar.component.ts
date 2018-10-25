import { Component, OnInit } from '@angular/core';

import { parentOptions } from '../../shared/typings/settings.typings';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  parentOptions = parentOptions;
  constructor() {}

  ngOnInit() {
  }

}
