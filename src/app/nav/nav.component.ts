import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cssHeight: CssHeight;
  widthState: WidthState;
  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {
    breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
      this.widthState = result.matches ? 1 : 2;
    });
    breakpointObserver.observe('(max-height: 599px)').subscribe(result => {
      this.cssHeight = this.activateHeight(result.matches);
    });
  }

  ngOnInit() {
  }

  activateHeight(result: boolean) {
    return {'horizontal': !result, 'vertical': result};
  }

}

class CssHeight {
  horizontal: boolean;
  vertical: boolean;
}

enum WidthState {
  small,
  middle
}
