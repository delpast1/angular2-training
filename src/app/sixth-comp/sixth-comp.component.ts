import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-comp',
  templateUrl: './sixth-comp.component.html',
  styleUrls: ['./sixth-comp.component.scss']
})
export class SixthCompComponent implements OnInit {

	content1 = {
		'font-size': '55px',
		'font-weight': 'bold',
		'margin-top': '120px',
		'margin-bottom': '75px'
	};

	content2 = {
		'font-size': '25px',
		'font-weight': 'bold',
		'line-height': '25px'
	};

	content3 = {
		'font-size': '25px',
		'line-height': '25px'
	};

  constructor() { }

  ngOnInit() {
  }

}
