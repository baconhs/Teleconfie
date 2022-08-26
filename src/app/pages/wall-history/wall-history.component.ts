import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

interface AmI { wall_state: string; }
interface History { history: string[]; }

@Component({
  selector: 'ami-fullstack-wall-history',
  templateUrl: './wall-history.component.html',
  styleUrls: ['./wall-history.component.scss']
})
export class WallHistoryComponent implements OnInit {
    public amiDoc: AngularFirestoreDocument<AmI>;
    public ami: Observable<AmI>;
    public histDoc: AngularFirestoreDocument<History>;
    public hist: Observable<History>;
    public wall_state: string;
    public lines: string[];
    public sub;

    constructor(public db: AngularFirestore, private router: Router) {
        this.amiDoc = db.doc<AmI>('Info/AmI');
        this.ami = this.amiDoc.valueChanges();
        this.sub = this.ami
        .subscribe((ami: AmI) => {
            this.wall_state = ami.wall_state;
            this.handleState();
        });

        this.histDoc = db.doc<History>("Info/History");
        this.hist = this.histDoc.valueChanges();

        this.hist.subscribe((hist: History) => {
            this.lines = hist.history;
        })
    }

    ngOnInit(): void {
    }

    handleState() {
        switch(this.wall_state){
            case "users": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-users");
                break;
            }
            case "commits": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-git");
                break;
            }
            case "break": {
                this.sub.unsubscribe();
                this.router.navigateByUrl("/wall-break");
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
