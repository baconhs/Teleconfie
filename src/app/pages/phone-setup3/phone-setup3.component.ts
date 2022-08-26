import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SmartSpeakerService } from '../../global/services/smart-speaker.service'

interface AmI { state: string; room: string }
interface Room { Id: string; passphrase: string }

@Component({
    selector: 'ami-fullstack-phone-setup3',
    templateUrl: './phone-setup3.component.html',
    styleUrls: ['./phone-setup3.component.scss']
})
export class PhoneSetup3Component implements OnInit {
    public roomsCol: AngularFirestoreCollection<Room>;
    public rooms: Observable<Room[]>;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public state: string;
    public success: boolean;
    public error: boolean;

    constructor(public db: AngularFirestore, private router: Router, public smartSpeaker: SmartSpeakerService) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
    }

    ngOnInit(): void {
        this.success = false;
        this.error = false;
    }

    joinRoom(passphrase: string) {
        var roomId: string = "None";

        this.roomsCol = this.db.collection<Room>('Rooms');
        this.rooms = this.roomsCol.valueChanges({idField: 'Id'});
        this.rooms.subscribe((rooms) => {
            rooms.forEach((room) => {
                if(room.passphrase === passphrase){
                    roomId = room.Id;
                    this.success = true;
                    this.updateAmIInfo(roomId);
                }
            })
            this.error = true;
        })
    }

    updateAmIInfo(id: string) {
        this.error = false;

        var ami: AmI = {
            room: id,
            state: "busy"
        };

        this.amiDoc.update(ami);
        this.router.navigateByUrl("/phone-setup4");
    }
}
