import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../../common/global-variables';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Users {
	Contacts: string[]; email: string; Chats: string[];
}
interface AmI {room:string}

@Component({
  selector: 'ami-fullstack-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})

export class ChatRoomsComponent implements OnInit {
  public amiDoc: AngularFirestoreDocument<AmI>;
  public ami: Observable<AmI>;
  public usersDoc: AngularFirestoreDocument<Users>;
  public users: Observable<Users>;
  public Chats: string[] = new Array();

  constructor(db:AngularFirestore,private router:Router) {
    this.amiDoc = db.doc<AmI>('Info/AmI');
    this.ami = this.amiDoc.valueChanges();
    this.usersDoc = db.doc<Users>('Users/' + GlobalVariables.user);
    this.users = this.usersDoc.valueChanges();
   	this.users
	  .subscribe((users: Users) => {
      this.Chats = users.Chats;
	});
  }

  ngOnInit() {
  }

  showRoomOptions(){
    var d = document.getElementById('publicRoom');
    d.style.display = "block";
    for ( var k = 0; k < this.Chats.length; k++) {
      document.getElementById('optionnum' + k).style.display ='none';
    }
    d.style.position = "absolute;"
    d.style.top = '5px';
    d.style.left = '-130px';
  }

  hideRoomOptions () {
    document.getElementById('publicRoom').style.display = 'none';
  }

  showOptions(i:number) {
      var d = document.getElementById('optionnum' + i);
      d.style.display = "block";
      for ( var k = 0; k < this.Chats.length; k++) {
            if (k!==i) document.getElementById('optionnum' + k).style.display ='none';
      }
      document.getElementById('publicRoom').style.display = 'none';
      d.style.position = "absolute";
      d.style.top = '5px';
      d.style.left = '-132px';
  }

  hideOptions() {
     for (var i = 0; i < this.Chats.length; i ++){
       document.getElementById('optionnum' + i).style.display = 'none';
     }
  }

  enterChat(person:string) {
  	this.router.navigateByUrl('/private-chat');
  	localStorage.setItem('person',person);
  }


}
