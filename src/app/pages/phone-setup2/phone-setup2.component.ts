import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface AmI { state: string; }

@Component({
    selector: 'ami-fullstack-phone-setup2',
    templateUrl: './phone-setup2.component.html',
    styleUrls: ['./phone-setup2.component.scss']
})
export class PhoneSetup2Component implements OnInit {
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public state: string;
    public sub;

    constructor(public db: AngularFirestore, private router: Router) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
        this.sub = this.ami
        .subscribe((ami: AmI) => {
            this.state = ami.state;
            this.handleState();
        });
    }

    ngOnInit(): void {
    }

    handleState() {
        switch(this.state){
            case "join": {
                console.log("JOINED");
                this.sub.unsubscribe();
                this.router.navigateByUrl("/phone-setup3");
                break;
            }
            case "busy": {
                console.log("SETUP4");
                this.sub.unsubscribe();
                this.router.navigateByUrl("/phone-setup4");
                break;
            }
        }
    }

}
