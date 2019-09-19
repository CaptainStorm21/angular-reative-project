import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent{

  panelOpenState = false;

   step = 0;
  @Input() personDetailsform:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}