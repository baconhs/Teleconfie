import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../../common/global-variables';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Users {
    Contacts: string[]; email: string; Chats: string[]; Id:string;
}
interface History { history: string[] }

@Component({
    selector: 'ami-fullstack-phone-contacts',
    templateUrl: './phone-contacts.component.html',
    styleUrls: ['./phone-contacts.component.scss']
})

export class PhoneContactsComponent implements OnInit {
    public usersCol: AngularFirestoreCollection<Users>;
    public allUsers: Observable<Users[]>;
    public updated: boolean = false;
    public addUser: boolean = false;
    public contactOptions: boolean = false;
    public usersDoc: AngularFirestoreDocument<Users>;
    public usersDoc2 : AngularFirestoreDocument<Users>;
    public users: Observable<Users>;
    public Contacts: string[] = new Array();
    public Chats: string[] = new Array();

    constructor(public db: AngularFirestore,private router: Router) {
        this.usersDoc = db.doc<Users>('Users/' + GlobalVariables.user);
        this.users = this.usersDoc.valueChanges();
        this.users
        .subscribe((users: Users) => {
            this.Contacts = users.Contacts;
            this.Chats = users.Chats;
        });
    }

    ngOnInit() {
        this.updated = false;
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("add");
        var crt = document.getElementById("create");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.addEventListener('click', function () {
            modal.style.display = "none";
        });

        crt.addEventListener('click', function () {
            modal.style.display = "none";
        });

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    showOptions(i:number) {
        var d = document.getElementById('optionnum' + i);
        d.style.display = "block";
        for ( var k = 0; k < this.Contacts.length; k++) {
            if (k!==i) document.getElementById('optionnum' + k).style.display ='none';
        }
        d.style.position = "absolute";
        d.style.left = '-120px';     
    }

    hideOptions() {
       for (var i = 0; i < this.Contacts.length; i ++){
         document.getElementById('optionnum' + i).style.display = 'none';
       }
    }

    invite(contact) {
        this.updated = false;
        let historyDoc = this.db.doc<History>('Info/History');
        let histObs = historyDoc.valueChanges();

        let history: string[] = new Array();

        histObs.subscribe((hist: History) => {
            history = hist.history;
            this.updateDoc(history, historyDoc, contact);
        });
    }

    updateDoc(history: string[], doc, contact){
        if(!this.updated){
            let user = GlobalVariables.user;
            history.push(user + " has invited " + contact + " to the room.");
            doc.update({history: history})
            this.updated = true;
        }
    }

    deleteContact( i:number ) {
        for (var k = 0; k < this.Contacts.length; k++) {
            if (this.Contacts[i] === this.Chats[k]) this.Chats.splice(k,1);
        }
        this.Contacts.splice(i,1);
        this.usersDoc.update({Contacts : this.Contacts});
        this.usersDoc.update({Chats : this.Chats});
    }

    capitalizeFirstLetter(s:string) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    createUser(name:string, email:string){
        let counter: number = 0;
        let found: boolean = false;
        this.addUser = false;
        this.usersDoc2 = this.db.doc<Users>('Users/' + name);
        this.usersCol = this.db.collection<Users>('Users');
        this.allUsers = this.usersCol.valueChanges({idField: 'Id'});
        this.allUsers.subscribe((allUsers) => {
            if (!this.addUser){
                allUsers.forEach((kapoios) => {
                    counter++;
                    if(kapoios.Id === name){
                        found = true;
                    }
                    if (counter === allUsers.length - 1){
                        this.addUser = true; 
                        if(!found) this.usersDoc2.set({Contacts: [], email: email, Chats:[],Id:name});
                    }
                })
               
            } 
        })
    }

    addContact() {
        let t: string = (<HTMLInputElement>document.getElementById('name')).value;
        let email: string = (<HTMLInputElement>document.getElementById('email')).value;
        let name: string;
        if (t.length !== 0) {
            name = this.capitalizeFirstLetter(t);
            if(this.Contacts.length === 0){
                this.Contacts.push(name);
            }
            else{
                for (var i = 0; i < this.Contacts.length; i++){
                    if (name === this.Contacts[i]) {
                        this.Contacts.splice(i+1,0,name);
                        break;
                    }
                    else if (name < this.Contacts[0]) {
                        this.Contacts.splice(0,0,name);
                        break;
                    }
                    if (i === this.Contacts.length - 1) {
                        this.Contacts.push(name);
                        break;
                    }
                    else if ( name > this.Contacts[i] && name < this.Contacts[i+1]) {
                        this.Contacts.splice(i+1,0,name);
                        break;
                    }
                }
            }
            this.usersDoc.update({Contacts : this.Contacts});
            this.createUser(name,email);
        }
    }

    createChat(person: string) {
        localStorage.setItem('person',person);
        this.router.navigateByUrl('/private-chat');
    }

}
