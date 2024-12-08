import { Injectable } from "@angular/core";
import { StudentDetails } from "./student-details";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentDetails: StudentDetails[] = [
        {
            id: 1,
            firstname: 'Bobby',
            lastname: 'Rocket',
            dob: '03.05.2000',
            sex: 'M',
            isPref: true,
            class: 'JAITA 130',
            house: 'RavenClaw'
        },
        {
            id: 2,
            firstname: 'Bobbette',
            lastname: 'Rockette',
            dob: '02.04.2003',
            sex: 'F',
            isPref: false,
            class: 'JAITA 130',
            house: 'Gryffindor'
        },
        {
            id: 3,
            firstname: 'Charles',
            lastname: 'Xavier',
            dob: '21.10.1945',
            sex: 'M',
            isPref: true,
            class: 'JAITA 130',
            house: 'Slytherin'
        },
   
    ];

    getStudentDetails(): StudentDetails[] {
        return this.studentDetails;
    }
}