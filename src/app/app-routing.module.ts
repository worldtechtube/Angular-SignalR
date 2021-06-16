import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { FailedloginComponent } from './failedlogin/failedlogin.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { NewCarComponent } from './new-car/new-car.component';
import { RegisterComponent } from './register/register.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addNewCar', component: NewCarComponent, canActivate:[AuthenticationGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'message', component: MessageComponent},
  {path: 'sendmessage', component: SendmessageComponent},
  {path: 'failedlogin', component: FailedloginComponent},
  {path: 'fileupload', component: FileuploadComponent},
  {path: 'testcomponent', component: TestComponent},
  //{path: 'student', component: StudentComponent}
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
