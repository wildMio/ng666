import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public on = true;

  constructor() { }

  ngOnInit() {
  }

  onToggle(message, on) {
    console.log(message, on);
  }
}
