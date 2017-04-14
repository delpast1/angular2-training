import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-comp',
  templateUrl: './fourth-comp.component.html',
  styleUrls: ['./fourth-comp.component.scss']
})
export class FourthCompComponent implements OnInit {

	contentTitle = {
		'font-size': '55px',
		'color': 'white',
		'font-weight': 'bold'
	};

	content1 = {
		'font-size': '28px',
		'width': '420px',
		'line-height': '40px'
	};

	content2 = {
		'font-size': '20px',
		'width': '435px',
		'line-height': '30px'
	};

	content3 = {
		'font-size': '25px',
		'color': 'orange',
		'font-weight': 'bold',
		'width': '435px'
	};
  constructor() { }

  ngOnInit() {
  }

}
