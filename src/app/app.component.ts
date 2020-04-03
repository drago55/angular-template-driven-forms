import { Component } from '@angular/core';
import { User } from './model/user';
import { EnrollmentService } from './service/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError =true;
  submitted = false;
  errorMsg ="";

  userModel =  new User('', 'rob@test.com', 55566454, '', 'morning', true);

  title = 'tdf';

  constructor(private enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value==='default'){
      this.topicHasError = true;
    }else{
      this.topicHasError =false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success', data),
      error => this.errorMsg = error.statusText
      
      );
  }
}
