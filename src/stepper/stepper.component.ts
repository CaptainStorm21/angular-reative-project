import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit  {

  isLinear = true;

  personalForm:FormGroup;
  solutionsForm: FormGroup;
  fundingsForm : FormGroup;
  reviewForm: FormGroup;
  identityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.buildPersonalForm();
   this.buildSolutionsForm();
   this.buildFundingForm();
   this.buildReviewForm();
   this.buildIdentityForm();
  }

//personal info - 1st step
  buildPersonalForm():void{
    this.personalForm  = this.formBuilder.group({
        firstName:['',Validators.required],
        middleName:['',Validators.required],
        lastName:['',Validators.required],
        suffix:[''],
        mothersMaidenName: ['',Validators.required],
        phone1:['',Validators.required],
        phone2:['',Validators.required],
        ssn: ['',Validators.required],
        dob: ['',Validators.required],
        email: ['',Validators.required],
        identity: ['',Validators.required],
    });
  }

//2nd step
buildSolutionsForm():void{
      this.solutionsForm = this.formBuilder.group({
    });
  }

//3rd
buildFundingForm():void{
      this.fundingsForm = this.formBuilder.group({
    });
}


//4th 
buildReviewForm():void{
      this.reviewForm = this.formBuilder.group({
    });
}

//5th
buildIdentityForm():void{
      this.identityForm = this.formBuilder.group({
    });
}



   getFormInfo(): any {
     //console.log(this.personalForm.value);
      return { ...this.personalForm .value, 
              ...this.solutionsForm.value,
              ...this.fundingsForm.value, 
              ...this.reviewForm.value,
              ...this.identityForm.value 
              };
  }

}

