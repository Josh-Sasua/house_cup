import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentDetail: StudentDetail[] = [
        {
            id: 1,
            firstname: 'Bobby',
            lastname: 'Rocket',
            dob: new Date(2000,5,3),
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
        
    

    getStudentDetails(): StudentDetail[] {
        return this.studentDetail;
    }
}