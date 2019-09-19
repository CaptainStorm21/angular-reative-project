import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export interface Suffix {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() personalInfoform: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  suffixes: Suffix[] = [

    {
      "viewValue": "Jr.",
      "value": "Jr"
    },
    {
      "viewValue": "Sr.",
      "value": "Sr"
    },
    {
      "viewValue": "II",
      "value": "II"
    },
    {
      "viewValue": "III",
      "value": "III"
    },
    {
      "viewValue": "IV",
      "value": "IV"
    },
    {
      "viewValue": "V",
      "value": "V"
    },
    {
      "viewValue": "VI",
      "value": "VI"
    },
    {
      "viewValue": "VII",
      "value": "VII"
    },
    {
      "viewValue": "VIII",
      "value": "VIII"
    }]

}