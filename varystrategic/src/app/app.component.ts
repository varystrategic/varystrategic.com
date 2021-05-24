import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { OnInit, Component, HostBinding } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as Feather from 'feather-icons';
import * as WebFont from 'webfontloader';
declare let balanceText: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        query(':self', style({ opacity: 0 })),
        query(':self', stagger('300ms', [
          animate('300ms ease-in', style({ opacity: 1 }))
        ]))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {

  @HostBinding('class') navClass:string = "";

  constructor (private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        this.navClass = route.url.substring(1);
      }
    });
  }

  ngOnInit() {
    Feather.replace();
    WebFont.load({
      google: { families: ['Roboto:100,300,400,500,700'] },
      active: balanceText(),
    })
  }
}
