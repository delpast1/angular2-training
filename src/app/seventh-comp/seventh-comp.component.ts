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
		'border-bottom': 'solid',
		'border-width': '1px',
		'margin-bottom': '35px'
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
