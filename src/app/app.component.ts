import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;

  constructor(public router: Router, private location: Location) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        // if (browserRefresh) {
        //   this.selectedlink = this.location.path().substr(1);
        // }
        this.selectedlink = browserRefresh ? this.location.path().substr(1) : this.selectedlink;
      }
  });
  }
  showSidebar = true;
  title = 'docs';
  selectedlink;

  displayMatchedLocationPath(val) {
    this.selectedlink = val;
  }

}