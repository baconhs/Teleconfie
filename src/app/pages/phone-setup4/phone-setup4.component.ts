import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../common/global-variables';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface AmI { room: string; show_chat: boolean; record: boolean; user_share: boolean }
interface History { history: string[] }

@Component({
    selector: 'ami-fullstack-phone-setup4',
    templateUrl: './phone-setup4.component.html',
    styleUrls: ['./phone-setup4.component.scss']
})
export class PhoneSetup4Component implements OnInit {
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;

    public updated: boolean;

    constructor(public db: AngularFirestore, private router: Router) {
        this.updated = false;

        this.updateHistory();
        this.sleep();
    }

    ngOnInit(): void {
    }

    updateHistory(){
        if(!this.updated){
            let historyDoc = this.db.doc<History>('Info/History');
            let histObs = historyDoc.valueChanges();

            let history: string[] = new Array();

            histObs.subscribe((hist: History) => {
                history = hist.history;
                this.updateDoc(history, historyDoc);
            });

        }
    }

    updateDoc(history: string[], doc){
        if(!this.updated){
            let user = GlobalVariables.user;
            history.push(user + " has joined the room.");
            doc.update({history: history})
            this.updated = true;
        }
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async sleep() {
        await this.delay(3000);
        this.router.navigateByUrl("/phone-chat");
    }
}
