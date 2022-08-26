import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface AmI { Users: string[] }

@Component({
    selector: 'ami-fullstack-desktop-menu',
    templateUrl: './desktop-menu.component.html',
    styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {
    @Output("joinRoom") joinEvent = new EventEmitter<any>();
    @Output("createRoom") creatEvent = new EventEmitter<any>();

    public msg: string;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;

    constructor(public db: AngularFirestore) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
        this.ami
        .subscribe((ami: AmI) => {
            this.generateMsg(ami.Users);
        });
    }

    joinRoom() {
        this.joinEvent.emit();
    }

    createRoom() {
        this.creatEvent.emit();
    }

    ngOnInit(): void {
    }

    generateMsg(users: string[]) {
        this.msg = "Hi, ";
        for(var i = 0; i < users.length; i++){
            this.msg += users[i];
            if(i != users.length-1) this.msg += ' & ';
        }
    }

}
