import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GlobalVariables } from '../../common/global-variables';

interface User {Contacts: string[]; Email: string; Chats:string[] }
interface AmI { state: string; Users: string[] }

@Component({
    selector: 'ami-fullstack-phone-setup-u4',
    templateUrl: './phone-setup-u4.component.html',
    styleUrls: ['./phone-setup-u4.component.scss']
})
export class PhoneSetupU4Component implements OnInit {
    public userDoc: AngularFirestoreDocument<User>;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public state: string;
    public currUsers: string[];

    constructor(public db: AngularFirestore) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
        this.ami.subscribe((ami) => {
            this.currUsers = ami.Users;
        })
    }

    ngOnInit(): void {
    }

    setNameEmail(name: string, email: string) {
        GlobalVariables.user = name;
        this.userDoc = this.db.doc<User>('Users/' + name);

        var user: User = {
            Email: email,
            Contacts: [],
            Chats:[]
        };
        this.userDoc.set(user);

        this.currUsers.push(name);
        var ami: AmI = {
            Users: this.currUsers,
            state: "paired"
        };
        this.amiDoc.update(ami);
    }

}
