import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconed-comp',
  templateUrl: './seconed-comp.component.html',
  styleUrls: ['./seconed-comp.component.scss']
})
export class SeconedCompComponent implements OnInit {
	
	yourProduct = {
		'font-size': '55px',
		'font-weight': 'bold',
		'color': 'white'
	};

	content1 = {
		'font-size': '28px',
		'color': '#d6c6c6',
		'width': '435px',
		'line-height': '40px'
	};

	content2 = {
		'font-size': '20px',
		'color': '#d6c6c6',
		'width': '435px',
		'line-height': '30px'
	};

	content3 = {
		'font-size': '25px',
		'color': 'orange',
		'font-weight': 'bold'
	};
  constructor() { }

  ngOnInit() {
  }

}
