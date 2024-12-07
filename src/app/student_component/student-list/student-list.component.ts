import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../model/student-service';
import { RouterModule } from '@angular/router';
import { StudentDetails } from '../../model/student-details';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})

export class StudentListComponent implements OnInit {

  studentDetails!: StudentDetails[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentDetails = this.studentService.getStudentDetails();
  }
}


