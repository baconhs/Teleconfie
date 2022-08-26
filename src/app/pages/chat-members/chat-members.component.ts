import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Rooms {
  Members:string[];
}

interface AmI {room:string}


@Component({
  selector: 'ami-fullstack-chat-members',
  templateUrl: './chat-members.component.html',
  styleUrls: ['./chat-members.component.scss']
})


export class ChatMembersComponent implements OnInit {
  public amiDoc: AngularFirestoreDocument<AmI>;
  public ami: Observable<AmI>;
  public roomDoc: AngularFirestoreDocument<Rooms>;
  public room: Observable<Rooms>;
  public Members: string[] = new Array();
  public roomID:string;

  constructor(public db: AngularFirestore) {
      this.amiDoc = db.doc<AmI>('Info/AmI');
      this.ami = this.amiDoc.valueChanges();
      this.ami
        .subscribe((ami: AmI) => {
            this.roomID = ami.room;
            this.roomDoc = db.doc<Rooms>('Rooms/'+this.roomID);
            this.getMembers();
      });
  }

  getMembers() {
      this.room = this.roomDoc.valueChanges();
      this.room
       .subscribe((room: Rooms) => {
           this.Members = room.Members;
      });
  }


  ngOnInit() {
  }

  showOptions(i:number) {
        var d = document.getElementById('optionnum' + i);
        d.style.display = "block";
        for ( var k = 0; k < this.Members.length; k++) {
            if (k!==i) document.getElementById('optionnum' + k).style.display ='none';
        }
        d.style.position = "absolute";
        d.style.top = '5px';
        d.style.left = '-150px';
  }

  hideOptions() {
     for (var i = 0; i < this.Members.length; i ++){
       document.getElementById('optionnum' + i).style.display = 'none';
     }
  }

  kickMember( i:number ) {
    this.Members.splice(i,1);
    this.roomDoc.update({Members : this.Members});
  }
}
