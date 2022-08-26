import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'node_modules/ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DesktopSetupComponent } from './pages/desktop-setup/desktop-setup.component';
import { SensorLoadingComponent } from './pages/sensor-loading/sensor-loading.component';
import { DesktopMenuComponent } from './pages/desktop-menu/desktop-menu.component';
import { DesktopJoinComponent } from './pages/desktop-join/desktop-join.component';
import { DesktopCreateComponent } from './pages/desktop-create/desktop-create.component';
import { DesktopLinkComponent } from './pages/desktop-link/desktop-link.component';
import { DesktopContComponent } from './pages/desktop-cont/desktop-cont.component';
import { VirtualComponent } from './pages/virtual/virtual.component';
import { WallUsersComponent } from './pages/wall-users/wall-users.component';
import { WallGitComponent } from './pages/wall-git/wall-git.component';
import { WallSetupComponent } from './pages/wall-setup/wall-setup.component';
import { WallHistoryComponent } from './pages/wall-history/wall-history.component';
import { PhoneSetup1Component } from './pages/phone-setup1/phone-setup1.component';
import { PhoneSetup2Component } from './pages/phone-setup2/phone-setup2.component';
import { PhoneSetup3Component } from './pages/phone-setup3/phone-setup3.component';
import { PhoneSetup4Component } from './pages/phone-setup4/phone-setup4.component';
import { PhoneChatComponent } from './pages/phone-chat/phone-chat.component';
import { TableComponent } from './pages/table/table.component';
import { WallBreakComponent } from './pages/wall-break/wall-break.component';
import { RoomComponent } from './pages/room/room.component';
import { PhoneContactsComponent } from './pages/phone-contacts/phone-contacts.component';
import { ChatMembersComponent } from './pages/chat-members/chat-members.component';
import { ChatRoomsComponent } from './pages/chat-rooms/chat-rooms.component';
import { PrivateChatComponent } from './pages/private-chat/private-chat.component';
import { PhoneCreateGitComponent } from './pages/phone-create-git/phone-create-git.component';
import { PhoneSetupU2Component } from './pages/phone-setup-u2/phone-setup-u2.component';
import { PhoneSetupU3Component } from './pages/phone-setup-u3/phone-setup-u3.component';
import { PhoneSetupU4Component } from './pages/phone-setup-u4/phone-setup-u4.component';
import { DesktopConnectingComponent } from './pages/desktop-connecting/desktop-connecting.component';

const config = {
    apiKey: "AIzaSyBxzo2Uidybhvm5YgoTT9x5UTmrBEfI_eg",
    authDomain: "project-5ecc5.firebaseapp.com",
    databaseURL: "https://project-5ecc5.firebaseio.com",
    projectId: "project-5ecc5",
    storageBucket: "project-5ecc5.appspot.com",
    messagingSenderId: "525218982597",
    appId: "1:525218982597:web:f02265bf3b9ce5fa16deac"
}

@NgModule({
    declarations: [
        //CommonModule,
        //BrowserAnimationsModule, // required animations module
        //ToastrModule, // ToastrModule added
        AppComponent,
        WelcomeComponent,
        DesktopSetupComponent,
        SensorLoadingComponent,
        DesktopMenuComponent,
        DesktopJoinComponent,
        DesktopCreateComponent,
        DesktopLinkComponent,
        DesktopContComponent,
        VirtualComponent,
        WallUsersComponent,
        WallGitComponent,
        WallSetupComponent,
        WallHistoryComponent,
        PhoneSetup1Component,
        PhoneSetup2Component,
        PhoneSetup3Component,
        PhoneSetup4Component,
        PhoneChatComponent,
        WallBreakComponent,
        TableComponent,
        RoomComponent,
        PhoneContactsComponent,
        ChatMembersComponent,
        ChatRoomsComponent,
        PrivateChatComponent,
        PhoneCreateGitComponent,
        PhoneSetupU2Component,
        PhoneSetupU3Component,
        PhoneSetupU4Component,
        DesktopConnectingComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule // firestore
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
