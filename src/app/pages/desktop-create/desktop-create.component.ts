import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ami-fullstack-desktop-create',
    templateUrl: './desktop-create.component.html',
    styleUrls: ['./desktop-create.component.scss']
})
export class DesktopCreateComponent implements OnInit {
    @Output("linkGithub") linkEvent = new EventEmitter<any>();
    @Output("cont") contEvent = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    linkGithub() {
        this.linkEvent.emit();
    }

    cont() {
        this.contEvent.emit();
    }

}
