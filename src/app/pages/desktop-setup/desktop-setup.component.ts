import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassPhrases } from '../../common/pass-phrases';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface AmI { room: string; state: string; Users: string[]; wall_state: string }
interface Rooms { Members: string[]; passphrase: string }

@Component({
    selector: 'ami-fullstack-desktop-setup',
    templateUrl: './desktop-setup.component.html',
    styleUrls: ['./desktop-setup.component.scss']
})
export class DesktopSetupComponent implements OnInit {
    public showSensors: boolean = false;
    public showQRs: boolean = false;
    public showMenu: boolean = false;
    public showJoin: boolean = false;
    public showCreate: boolean = false;
    public showLink: boolean = false;
    public showCont: boolean = false;
    public showConn: boolean = false;
    public updated: boolean = false;
    public created: boolean = false;
    public connected = false;

    public users: string[];
    public currMembers: string[];
    public numUsers: number;
    public state: string;
    public currRoom: string;
    public passphrase: string;
    public sub;

    public roomDoc: AngularFirestoreDocument<Rooms>;
    public room: Observable<Rooms>;
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;

    constructor(public db: AngularFirestore, private router: Router) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.amiDoc.update({room: "None", state: "join", Users: [], wall_state: "setup"});

        this.ami = this.amiDoc.valueChanges();
        this.ami
        .subscribe((ami: AmI) => {
            this.users = ami.Users;
            this.currRoom = ami.room;
            this.state = ami.state;
            this.handleState();
        });

    }

    ngOnInit(): void {
        this.showSensors = true;
        this.numUsers = 2;
        this.sleep3();
    }

    async sleep3() {
        await this.delay(3000);
        this.hideSensors();
    }

    handleState() {
        switch(this.state) {
            case "paired": {
                this.hideQRs();
                break;
            }
            case "busy": {
                this.connectToRoom();
                break;
            }
        }
    }

    calibrate() {
        this.showSensors = true;
        this.showQRs = false;
        this.sleep3();
    }

    hideSensors(){
        this.showSensors = false;
        this.showQRs = true;
    }

    hideQRs(){
        this.showQRs = false;
        this.showMenu = true;
    }

    joinRoom(){
        this.showMenu = false;
        this.showJoin = true;

        this.amiDoc.update({state: "join"});
    }

    createRoom(){
        this.showMenu = false;
        this.showCreate = true;
        this.amiDoc.update({state: "create"});
    }

    linkGithub() {
        this.showCreate = false;
        this.showLink = true;
    }

    cont() {
        this.showCreate = false;
        this.showLink = false;
        this.showCont = true;

        this.amiDoc.get()
        .subscribe((ami) => {
            let id = this.generateID();

            this.roomDoc = this.db.doc("Rooms/" + id);
            this.roomDoc.set({
                Members: ami.data().Users,
                passphrase: this.generatePassPhrase()
            })

            this.amiDoc.update({room: id.toString()})

            let msg: string = '';
            for(var i = 0; i < ami.data().Users.length; i++){
                msg += ami.data().Users[i];
                if(i !== ami.data().Users.length - 1) msg += ' and ';
            }

            this.db.doc("Info/History").update({history: new Array(msg + " created the room.")})
        });
    }

    generatePassPhrase(): string {
        let array = PassPhrases.pphrases;
        let index = Math.floor((Math.random() * 600) % array.length) + 1;
        let pphrase = array[index];
        this.passphrase = pphrase;
        array.splice(index, 1);

        return pphrase;
    }

    generateID() {
        return Math.floor(Math.random() * 200) + 1;
    }

    connectToRoom() {
        if(!this.connected){
            this.connected = true;
            this.showCont = false;
            this.showJoin = false;

            this.amiDoc.update({state: "busy"});

            this.showConn = true;
            this.addUsers();
            this.sub.unsubscribe();
            this.sleep();
        }
    }

    addUsers() {
        this.roomDoc = this.db.doc("Rooms/" + this.currRoom);
        this.room = this.roomDoc.valueChanges();

        this.sub = this.room.subscribe((room: Rooms) => {
            this.currMembers = room.Members;
            if(!this.updated){
                this.currMembers = this.currMembers.concat(this.users);
                this.roomDoc.update({Members: this.currMembers});
                this.updated = true;
            }
        });
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async sleep() {
        await this.delay(3000);
        this.amiDoc.update({wall_state: "users"});
        this.router.navigateByUrl("/room");
    }
}
