import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ManagerLoginPage } from '../pages/manager-login/manager-login';
import { ManagerMenuPage } from '../pages/manager-menu/manager-menu';
import { HomePage } from '../pages/home/home';
import { ManagerDishDetails } from '../pages/manager-dishdetails/manager-dishdetails';
import { AuthService } from '../providers/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ManagerLoginPage,
    ManagerMenuPage,
    ManagerDishDetails,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ManagerLoginPage,
    ManagerMenuPage,
    ManagerDishDetails,
    HomePage
  ],
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
