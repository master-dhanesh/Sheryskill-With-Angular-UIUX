import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { ShowJobsComponent } from './Components/show-jobs/show-jobs.component';
import { JobsDescComponent } from './Components/show-jobs/jobs-desc/jobs-desc.component';
import { SubmitResumeComponent } from './Components/show-jobs/submit-resume/submit-resume.component';
import { EmployeRegisterComponent } from './Components/employe-register/employe-register.component';
import { EmployerRegisterComponent } from './Components/employer-register/employer-register.component';
import { EmployerLoginComponent } from './Components/employer-login/employer-login.component';
import { EmployeLoginComponent } from './Components/employe-login/employe-login.component';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { EmployerDashComponent } from './Components/employer-dash/employer-dash.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'show-jobs', component: ShowJobsComponent },
    { path: 'jobs-desc', component: JobsDescComponent },
    { path: 'jobs-desc', component: JobsDescComponent },
    { path: 'submit-resume', component: SubmitResumeComponent },
    { path: 'employe-login', component: EmployeLoginComponent },
    { path: 'employer-login', component: EmployerLoginComponent },
    { path: 'employe-register', component: EmployeRegisterComponent },
    { path: 'employer-register', component: EmployerRegisterComponent },
    { path: 'post-job', component: PostJobComponent },
    { path: 'employer-dash', component: EmployerDashComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }