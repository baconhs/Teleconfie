import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesktopSetupComponent} from './pages/desktop-setup/desktop-setup.component';
import {WallSetupComponent} from './pages/wall-setup/wall-setup.component';
import {WallUsersComponent} from './pages/wall-users/wall-users.component';
import {WallGitComponent} from './pages/wall-git/wall-git.component';
import {WallBreakComponent} from './pages/wall-break/wall-break.component';
import {WallHistoryComponent} from './pages/wall-history/wall-history.component';
import {PhoneSetup1Component} from './pages/phone-setup1/phone-setup1.component';
import {PhoneSetup2Component} from './pages/phone-setup2/phone-setup2.component';
import {PhoneSetup3Component} from './pages/phone-setup3/phone-setup3.component';
import {PhoneSetup4Component} from './pages/phone-setup4/phone-setup4.component';
import {PhoneChatComponent} from './pages/phone-chat/phone-chat.component';
import {PhoneContactsComponent} from './pages/phone-contacts/phone-contacts.component';
import {ChatMembersComponent} from './pages/chat-members/chat-members.component';
import {ChatRoomsComponent} from './pages/chat-rooms/chat-rooms.component';
import {PrivateChatComponent} from './pages/private-chat/private-chat.component';
import {PhoneCreateGitComponent} from './pages/phone-create-git/phone-create-git.component';
import {TableComponent} from './pages/table/table.component';
import {RoomComponent} from './pages/room/room.component';
import {PhoneSetupU2Component} from './pages/phone-setup-u2/phone-setup-u2.component';
import {PhoneSetupU3Component} from './pages/phone-setup-u3/phone-setup-u3.component';
import {PhoneSetupU4Component} from './pages/phone-setup-u4/phone-setup-u4.component';

const routes: Routes = [
    { path: 'desktop-setup', component: DesktopSetupComponent },
    { path: 'wall-setup', component: WallSetupComponent },
    { path: 'wall-git', component: WallGitComponent },
    { path: 'wall-history', component: WallHistoryComponent },
    { path: 'wall-users', component: WallUsersComponent },
    { path: 'wall-break', component: WallBreakComponent },
    { path: 'phone-setup-u1', component: PhoneSetup1Component},
    { path: 'phone-setup-u2', component: PhoneSetupU2Component},
    { path: 'phone-setup-u3', component: PhoneSetupU3Component},
    { path: 'phone-setup-u4', component: PhoneSetupU4Component},
    { path: 'phone-setup2', component: PhoneSetup2Component},
    { path: 'phone-setup3', component: PhoneSetup3Component},
    { path: 'phone-setup4', component: PhoneSetup4Component},
    { path: 'phone-chat', component: PhoneChatComponent},
    { path: 'phone-contacts', component: PhoneContactsComponent},
    { path: 'chat-members', component: ChatMembersComponent},
    { path: 'chat-rooms', component: ChatRoomsComponent},
    { path: 'private-chat', component: PrivateChatComponent},
    { path: 'phone-create-git', component: PhoneCreateGitComponent},
    { path: 'table', component: TableComponent},
    { path: 'room', component: RoomComponent},
    { path: '**', redirectTo: 'desktop-setup', pathMatch: 'full' },
];

@NgModule({
    //declarations: []
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
