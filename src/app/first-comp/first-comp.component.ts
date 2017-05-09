import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {
	
	author = {
	    color: 'black'
	  };
  constructor() { }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = location;
  }
}
