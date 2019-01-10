import { Component } from '@angular/core';

@Component({
    selector: 'ng-button',
    template: `
      <button (click)="nextUser()">Next User</button>
  `
  })

export class UsersComponent { 

}