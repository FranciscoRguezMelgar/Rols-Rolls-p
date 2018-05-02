import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { PersistComp } from '../logic/PersistComp';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Device } from '@ionic-native/device';
import { FIRE_CONF } from './firebase.credentials';
import { ImagePicker } from '@ionic-native/image-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupsPage } from '../pages/groups/groups';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { JoiningPage } from '../pages/joining/joining';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { TextsPage } from '../pages/texts/texts';
import { RollsPage } from '../pages/rolls/rolls';
import { ImagesPage } from '../pages/images/images'
import { MapPage } from '../pages/map/map'
import { ChatPage } from '../pages/chat/chat'
import { PasswordPage } from '../pages/password/password';
import { ReadTextPage } from '../pages/read-text/read-text';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupsPage,
    MainMenuPage,
    JoiningPage,
    TextsPage,
    RollsPage,
    LoginPage,
    CreateAccountPage,
    SigninPage,
    ImagesPage,
    MapPage,
    ChatPage,
    PasswordPage,
    ReadTextPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIRE_CONF),
    AngularFireDatabaseModule,              
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroupsPage,
    MainMenuPage,
    JoiningPage,
    TextsPage,
    RollsPage,
    LoginPage,
    CreateAccountPage,
    SigninPage,
    ImagesPage,
    MapPage,
    ChatPage,
    PasswordPage,
    ReadTextPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistComp,
    Device,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
