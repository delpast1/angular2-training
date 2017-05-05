import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh-comp',
  templateUrl: './seventh-comp.component.html',
  styleUrls: ['./seventh-comp.component.scss']
})
export class SeventhCompComponent implements OnInit {

	contentTitle = {
		'font-size': '20px',
		'color': 'white',
		'font-weight': 'bold',
		'line-height': '50px',
		'border-width': '1px',
		'margin-bottom': '35px',
		'border-bottom': '1px solid rgba(255,255,255,0.5)'
	};

	content1 = {
		'font-size': '17px',
		'color': '#dccfcf',
		'width': '500px',
		'line-height': '20px'
	};

  constructor() { }

  ngOnInit() {
  }

}
