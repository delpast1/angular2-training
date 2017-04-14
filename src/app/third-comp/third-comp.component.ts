import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.scss']
})
export class ThirdCompComponent implements OnInit {
	content1 = {
		'font-size': '55px',
		'color': '#490d67',
		'font-weight': 'bold'
	};

	content2 = {
		'font-size': '25px',
		'color': '#827070',
		'line-height': '45px'
	};
  constructor() { }

  ngOnInit() {
  }

}
