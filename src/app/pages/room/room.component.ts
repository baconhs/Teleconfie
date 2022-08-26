import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Message { Body: string; From: string; id: number; Room: string; }
interface AmI { room: string; show_chat: boolean; record: boolean; user_share: boolean; break: boolean; state: string }

@Component({
    selector: 'ami-fullstack-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
    public roomID: string;
    public messages: Message[];
    public user: string;
    public id: number;
    public showChat: boolean;
    public record: boolean;
    public userShare: boolean;
    public opened: boolean;

    public msgCol: AngularFirestoreCollection<Message>;
    public msgDoc: AngularFirestoreDocument<Message>;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public msges: Observable<Message[]>;

    constructor(public db: AngularFirestore, public router: Router) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();

        this.getMessages();

        this.ami
        .subscribe((ami: AmI) => {
            this.record = ami.record;
            this.userShare = ami.user_share;
            this.showChat = ami.show_chat;
            this.roomID = ami.room;
            this.handleState(ami.state);
            if(ami.break){
                if(!this.opened){
                    window.open("https://www.netflix.com/");
                    this.opened = true;
                }
            }
            else this.opened = false;
        });
    }

    handleState(state: string){
        if(state === "paired") this.router.navigateByUrl("/desktop-setup")
    }

    ngOnInit() {
    }

    getMessages(){
        this.msgCol = this.db.collection<Message>('RoomMessages', ref => ref.orderBy('id'));
        this.msges = this.msgCol.valueChanges();
        this.msges.subscribe((msges) => {
            this.messages = new Array();
            msges.forEach((msg) => {
                if(msg.Room === this.roomID){
                    this.messages.push(msg);
                    this.id = Number(msg.id);
                }
            })
        })
    }
}
