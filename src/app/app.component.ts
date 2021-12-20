import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formdata: any;

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl('angular@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('john', Validators.required),
      addr: new FormControl('newyork', Validators.required),
      mobile: new FormControl('8139918437', Validators.required),
      role: new FormControl('Admin', Validators.required),
      department: new FormControl('Finance', Validators.required),
      country: new FormControl('India', Validators.required),
    });
  }

  onClickSubmit(data: any) {
    console.table(data);
  }
}
