import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface AmI {
    state: string;
    Users: string[];
    wall_state: string;
    room: string;
    cam: boolean;
    mic: boolean;
    record: boolean;
    share: boolean;
    show_chat: boolean;
    break: boolean;
}

interface Users { Contacts: string[]; }
interface History { history: string[]; }

@Component({
    selector: 'ami-fullstack-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    public wallSrc: string;
    public micSrc: string;
    public camSrc: string;
    public shareSrc: string;
    public recordSrc: string;
    public contacts: string[];
    public users: string[];

    public cam: boolean;
    public chat: boolean;
    public mic: boolean;
    public share: boolean;
    public record: boolean;
    public showList: boolean;
    public showConf: boolean;
    public showOption: boolean;
    public showInvite: boolean;
    public busy: boolean;
    public updated: boolean;

    public userDoc: AngularFirestoreDocument<Users>[];
    public user: Observable<Users>[];
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public state: string;
    public break: boolean;

    constructor(public db: AngularFirestore) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();

        this.ami.subscribe((ami: AmI) => {
            this.busy = ami.state === "busy";
            this.getContacts(ami.Users);
        });
    }

    getContacts(users: string[]) {
        this.users = users;
        this.userDoc = new Array();
        this.user = new Array();
        this.contacts = new Array();

        for(var i = 0; i < users.length; i++){
            this.userDoc.push(this.db.doc("Users/" + users[i]));
            this.user.push(this.userDoc[i].valueChanges());

            this.user[i].subscribe((user: Users) => {
                this.contacts = this.contacts.concat(user.Contacts);
                this.contacts = this.contacts.filter((el, i, a) => i === a.indexOf(el))
            });
        }
    }

    ngOnInit() {
        this.cam = false;
        this.chat = true;
        this.mic = false;
        this.share = false;
        this.record = false;
        this.showList = false;
        this.showConf = false;
        this.showOption = false;
        this.showInvite = false;
        this.busy = false;
        this.break = false;
        this.updated = false;

        this.wallSrc = "assets/graphics/icons/wall-users.png";
        this.micSrc = "assets/graphics/icons/mic-off.png";
        this.camSrc = "assets/graphics/icons/cam-off.png";
        this.shareSrc = "assets/graphics/icons/share-off.png";
        this.recordSrc = "assets/graphics/icons/record-off.png";
    }

    switchMic() {
        if(!this.mic){
            this.mic = true;
            this.micSrc = "assets/graphics/icons/mic-on.png";
        }
        else{
            this.mic = false;
            this.micSrc = "assets/graphics/icons/mic-off.png";
        }
        this.amiDoc.update({mic: this.mic});
    }

    switchCam() {
        if(!this.cam){
            this.cam = true;
            this.camSrc = "assets/graphics/icons/cam-on.png";
        }
        else{
            this.cam = false;
            this.camSrc = "assets/graphics/icons/cam-off.png";
        }
        this.amiDoc.update({cam: this.cam});
    }

    switchChat() {
        this.chat = !this.chat;
        this.amiDoc.update({show_chat: this.chat});
    }

    switchRecord() {
        if(!this.record){
            this.record = true;
            this.recordSrc = "assets/graphics/icons/record-on.png";
        }
        else{
            this.record = false;
            this.recordSrc = "assets/graphics/icons/record-off.png";
        }
        this.amiDoc.update({record: this.record});
    }

    switchShare() {
        if(!this.share){
            this.share = true;
            this.shareSrc = "assets/graphics/icons/share-on.png";
        }
        else{
            this.share = false;
            this.shareSrc = "assets/graphics/icons/share-off.png";
        }
        this.amiDoc.update({share: this.share});
    }

    wallUsers() {
        this.wallSrc = "assets/graphics/icons/wall-users.png";

        this.amiDoc.update({wall_state: "users"});
    }

    wallHistory() {
        this.wallSrc = "assets/graphics/icons/wall-history.png";

        this.amiDoc.update({wall_state: "history"});
    }

    wallCommits() {
        this.wallSrc = "assets/graphics/icons/wall-commits.png";

        this.amiDoc.update({wall_state: "commits"});
    }

    leaveCall() {
        this.amiDoc.update({room: "None", state: "paired", wall_state: "setup"});
    }

    screenShot() {

    }

    showInviteRoom() {
        this.showConf = false;
        this.showList = false;
        this.showOption = false;
        this.showInvite = true;
    }

    showInviteWindow() {
        this.showConf = false;
        this.showList = false;
        this.showOption = false;
        this.showInvite = false;
        if(!this.showOption){
            this.showOption = true;
        }
        else{
            this.showOption = false;
        }
    }

    inviteContact(contact) {
        this.updated = false;
        let historyDoc = this.db.doc<History>('Info/History');
        let histObs = historyDoc.valueChanges();


        historyDoc.get().subscribe((hist) => {
            let history: string[] = new Array();
            history = hist.data().history;
            this.updateDoc(history, historyDoc, contact);
        });
    }

    updateDoc(history: string[], doc, contact){
        let msg: string = '';
        for(var i = 0; i < this.users.length; i++){
            msg += this.users[i];
            if(i !== this.users.length - 1) msg += ' and ';
        }
        history.push(msg + " invited " + contact + " to the room.");
        doc.update({history: history})
    }

    showContacts() {
        this.showOption = false;
        this.showList = true;
        this.showInvite = false;
    }

    showLunchBreak() {
        this.showList = false;
        this.showOption = false;
        this.showInvite = false;
        if(!this.showConf){
            this.showConf = true;
        }
        else{
            this.showConf = false;
        }
    }

    confirmLB() {
        this.showConf = false;
        this.break = true;

        this.mic = false;
        this.micSrc = "assets/graphics/icons/mic-off.png";
        this.cam = false;
        this.camSrc = "assets/graphics/icons/cam-off.png";
        this.amiDoc.update({wall_state: "break", mic: false, cam: false, break: true});
    }

    cancelLB() {
        this.showConf = false;
    }

    showAttachWindow() {

    }

    hideAll() {
        this.showList = false;
        this.showOption = false;
        this.showInvite = false;
        this.showConf = false;
    }

    stopBreak(){
        this.wallUsers();
        this.break = false;
        this.amiDoc.update({break: false});
    }
}
