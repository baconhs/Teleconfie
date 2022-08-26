import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

interface AmI { wall_state: string; }

@Component({
    selector: 'ami-fullstack-wall-users',
    templateUrl: './wall-users.component.html',
    styleUrls: ['./wall-users.component.scss']
})
export class WallUsersComponent implements OnInit {
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public wall_state: string;
    public sub;

    constructor(public db: AngularFirestore, private router: Router) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
        this.sub = this.ami
        .subscribe((ami: AmI) => {
            this.wall_state = ami.wall_state;
            this.handleState();
        });
    }

    ngOnInit(): void {
    }

    handleState() {
        switch(this.wall_state){
            case "break": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-break");
                break;
            }
            case "commits": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-git");
                break;
            }
            case "history": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-history");
                break;
            }
            case "setup": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-setup")
                break;
            }
        }
    }
}
