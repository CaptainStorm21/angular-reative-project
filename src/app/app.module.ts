import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material.module';

//stepper and accordion
import { AccordionComponent } from '../accordion/accordion.component';
import { StepperComponent }  from '../stepper/stepper.component';

//personal info 
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { ReviewComponent } from '../review/review.component';

//personal info children


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    MaterialModule ],
  declarations: [ AccordionComponent, StepperComponent, PersonalInfoComponent, ReviewComponent],
  bootstrap:    [ StepperComponent ]
})
export class AppModule { }
