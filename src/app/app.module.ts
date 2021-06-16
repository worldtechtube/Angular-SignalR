import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CarDirDirective } from './car-dir.directive';
import { NewCarComponent } from './new-car/new-car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromptComponent } from './prompt/prompt.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './_services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor, FakeBackendProvider } from './_helper/fake-backend-intercepter';
import { FakeRequestChangeProvider } from './_helper/fake-requestchange-intercepter';
import { MessageComponent } from './message/message.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { FailedloginComponent } from './failedlogin/failedlogin.component';
import { FakeErrorInterceptor } from './_helper/ErrorInterceptor';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarDirDirective,
    NewCarComponent,
    PromptComponent,
    LogoutComponent,
    HomeComponent,
    FailedloginComponent,
    FileuploadComponent,
    TestComponent,
    ChildComponent
    // MessageComponent,
    // SendmessageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],//, FakeBackendProvider],// [DataService, FakeErrorInterceptor, FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
