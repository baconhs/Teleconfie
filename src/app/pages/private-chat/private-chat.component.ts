import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../../common/global-variables';
import { Output, EventEmitter } from '@angular/core';  
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Users {
  Contacts: string[]; email: string; Chats: string[];
}

interface Message {
  From: string; To: string; Body:string; id: number
}

@Component({
  selector: 'ami-fullstack-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})

export class PrivateChatComponent implements OnInit {
  public contactOption:boolean = false;
  public messages: Message[];
  public saveMessages: Message[];
  public msgCol: AngularFirestoreCollection<Message>;
  public msgDoc: AngularFirestoreDocument<Message>;
  public msges: Observable<Message[]>;
  public usersDoc: AngularFirestoreDocument<Users>;
  public usersDoc2: AngularFirestoreDocument<Users>;
  public users: Observable<Users>;
  public users2: Observable<Users>;
  public Contacts: string[] = new Array();
  public Chats: string[] = new Array();
  public Contacts2: string[] = new Array();
  public Chats2: string[] = new Array();

  public person: string;
  public user: string;
  public id: number;

  constructor(public db:AngularFirestore) { 
       this.person = localStorage.getItem('person');
       this.getMessages();
       this.usersDoc = db.doc<Users>('Users/' + GlobalVariables.user);
       this.usersDoc2 = db.doc<Users>('Users/' + this.person);

       this.users = this.usersDoc.valueChanges();
       this.users2 = this.usersDoc2.valueChanges();
       this.users
        .subscribe((users: Users) => {
            this.Contacts = users.Contacts;
            this.Chats = users.Chats;
        });
       if (this.users2 == null) {

       }
       else {
        console.log('mphka edw');
        this.users2
        .subscribe((users2: Users) => {
            this.Contacts2 = users2.Contacts;
            this.Chats2 = users2.Chats;
        });
       }
  }

  getMessages(){
        this.msgCol = this.db.collection<Message>('Messages', ref => ref.orderBy('id'));
        this.msges = this.msgCol.valueChanges();
        this.msges.subscribe((msges) => {
            this.messages = new Array();
            msges.forEach((msg) => {
               if( (msg.To === this.person && msg.From === this.user) || (msg.From === this.person && msg.To === this.user)) this.messages.push(msg);
               this.id = Number(msg.id);  
            })
        })
    }

  ngOnInit() {
    this.user = GlobalVariables.user;
  }

  showOptions () {
  	if (!this.contactOption) {
  		this.contactOption = true;
  	}
  }

  hideOptions() {
  	if (this.contactOption){
  		this.contactOption=false;
  	}
  }

  sendMessage(body:string) {
     var newMsg: Message = {
            id: (isNaN(this.id)) ? 0 : this.id+1,
            Body:body,
            From: this.user,
            To:this.person
        }
        this.msgCol.add(newMsg);
        for (var i = 0; i < this.Chats.length; i ++) {
            if (this.Chats[i] === this.person) return;
        }
        this.Chats.push(this.person);
        this.usersDoc.update({Chats:this.Chats});
        for (var k = 0; k < this.Chats.length; k ++) {
            if (this.Chats2[k] === this.user) return;
        }
        this.Chats2.push(this.user);
        this.usersDoc2.update({Chats:this.Chats2});
  }
}
