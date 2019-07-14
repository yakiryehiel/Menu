import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(rest) {
        this.rest = rest;
        this.title = 'Pointer Menu';
        this.getMenuItems();
    }
    getMenuItems() {
        this.rest.getMenu().subscribe(items => this.listOfMenuItems = items);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map