import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

	subscribeForm : FormGroup;
	email: FormControl

  	constructor(builder: FormBuilder) { 
  		this.email = new FormControl('',[Validators.required]);
  		this.subscribeForm = builder.group({
  			email: this.email
  		});
  	}
	  submitForm() {
		  if (!this.subscribeForm.valid) {
			alert(`The email is required.`);
		} else {
			var email = this.subscribeForm.value.email;
			var regexp = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
			if (regexp.test(email)) {
				alert(`Email: ${this.subscribeForm.value.email}`);
			} else {
				alert(`Your email is not correct.`);
			}

		}
	  }

  ngOnInit() {
  }

}
