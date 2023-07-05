import { Component } from '@angular/core';

@Component({
  selector: 'app-attach',
  templateUrl: './attach.component.html',
  styleUrls: ['./attach.component.scss']
})
export class AttachComponent {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
