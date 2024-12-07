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
            dob: new Date(2000, 5, 3),
            sex: 'M',
            isPref: true,
            class: 'Jaita 130',
            house: 'RavenClaw'
        },
        {
            id: 1,
            firstname: 'Bobbette',
            lastname: 'Rockette',
            dob: new Date(2003, 4, 2),
            sex: 'F',
            isPref: false,
            class: 'Jaita 130',
            house: 'Gryffindor'
        }
    ];



    getStudentDetails(): StudentDetails[] {
        return this.studentDetails;
    }
}