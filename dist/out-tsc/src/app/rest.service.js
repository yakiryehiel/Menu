import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.menuItemsPath = 'http://localhost:8080/api/menu/';
    }
    getMenu() {
        return this.http.get(this.menuItemsPath);
    }
};
RestService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RestService);
export { RestService };
//# sourceMappingURL=rest.service.js.map