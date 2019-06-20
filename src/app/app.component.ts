import { Component, OnInit } from '@angular/core';
import { routerTransition } from './app-routing.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {}
}
