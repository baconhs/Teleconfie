import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'ami-fullstack-desktop-cont',
    templateUrl: './desktop-cont.component.html',
    styleUrls: ['./desktop-cont.component.scss']
})
export class DesktopContComponent implements OnInit {
    @Output("connectToRoom") connectEvent = new EventEmitter<any>();

    public passphrase: string;

    @Input('pphrase')
    set name(name: string) {
        this.passphrase = name;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    connectToRoom() {
        this.connectEvent.emit();
    }
}
