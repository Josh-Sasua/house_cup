import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student_component/student-list/student-list.component';
import { ScoreComponent } from './score_component/score/score.component';
import { StudentDetailsComponent } from './student_component/student-details/student-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'students', component: StudentListComponent },
    { path: 'scores', component: ScoreComponent },
    { path: 'details', component: StudentDetailsComponent }
];
