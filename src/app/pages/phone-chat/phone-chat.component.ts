import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../../common/global-variables';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Message { Body: string; From: string; id: number; Room: string}
interface AmI { room: string; }


@Component({
    selector: 'ami-fullstack-phone-chat',
    templateUrl: './phone-chat.component.html',

    styleUrls: ['./phone-chat.component.scss']
})
export class PhoneChatComponent implements OnInit {
    public channelOption:boolean = false;
    public roomID: string;
    public messages: Message[];
    public user: string;
    public id: number;

    public msgCol: AngularFirestoreCollection<Message>;
    public msgDoc: AngularFirestoreDocument<Message>;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public msges: Observable<Message[]>;

    constructor(public db: AngularFirestore) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();

        this.amiDoc.get()
        .subscribe((ami) => {
            this.roomID = ami.data().room;
            this.getMessages();
        });

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

    ngOnInit() {
        this.user = GlobalVariables.user;
    }

    sendMessage(body: string){
        var newMsg: Message = {
            id: (isNaN(this.id)) ? 0 : this.id+1,
            Body: body,
            From: this.user,
            Room: this.roomID
        }

        this.msgCol.add(newMsg);
    }

    showOptions () {
        if (!this.channelOption) {
            this.channelOption = true;
        }
    }

    hideOptions() {
        if (this.channelOption){
            this.channelOption = false;
        }
    }

}
