import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-comp',
  templateUrl: './fifth-comp.component.html',
  styleUrls: ['./fifth-comp.component.scss']
})
export class FifthCompComponent implements OnInit {

	content1 = {
		'font-size': '55px',
		'color': '#490d67',
		'font-weight': 'bold'
	};

	content2 = {
		'font-size': '30px',
		'color': '#827070',
		'line-height': '20px'
	};

	content3 = {
		'font-size': '25px',
		'color': '#490d67',
		'font-weight': 'bold',
		'line-height': '25px'
	};

	content4 = {
		'font-size': '17px',
		'color': '#827070',
		'line-height': '22px',
		'width' : '299px',
		'margin' : 'auto'
	};

	contentCenter = {
		'font-size': '17px',
		'color': '#827070',
		'line-height': '22px',
		'width' : '360px',
		'margin' : 'auto'
	};


	divTitle = {
		'margin-top': '30px',
		'margin-bottom': '20px'
	}
  constructor() { }

  ngOnInit() {
  }

}
