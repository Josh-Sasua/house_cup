import { Injectable } from "@angular/core";
import { StudentDetails } from "./student-details";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class StudentService {
    constructor(private http:HttpClient){}
    getStudentDetails():Observable<StudentDetails[]>{
        return this.http.get<StudentDetails[]>("http://localhost:8080/students");
    }
}