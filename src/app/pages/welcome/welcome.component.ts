import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ami-fullstack-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    public _usersNum: number;
    public usersIndex = new Array();

    @Output("calibrate") calibrateEvent = new EventEmitter<any>();

    @Input("usersNum")
    set usersNum(usersNum: number) {
        this._usersNum = usersNum;
    }

    get usersNum(): number { return this._usersNum; }

    constructor() { }

    calibrate() {
        this.calibrateEvent.emit();
    }

    ngOnInit(): void {
        //this._usersNum = 1;
        for(let i = 0; i < this._usersNum; i++){
            this.usersIndex.push(i);
        }
    }

}
