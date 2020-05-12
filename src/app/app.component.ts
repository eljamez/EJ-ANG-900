import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>
        {{ title }}
      </h1>
      <app-keyboard (update)="onUpdate($event)">
        keys will go in here
      </app-keyboard>
    </main>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: grid;
        padding: 40px;
        border-radius: 10px;
        background-color: white;
        background: linear-gradient(
            to top,
            rgba(128, 128, 128, 0.8) 0%,
            rgba(230, 230, 250, 0.2) 2%,
            rgba(230, 230, 250, 0.2) 98%,
            rgba(128, 128, 128, 0.8) 100%
          ),
          linear-gradient(
            to left,
            rgba(128, 128, 128, 0.8) 0%,
            rgba(230, 230, 250, 0.8) 1%,
            rgba(230, 230, 250, 0.8) 99%,
            rgba(128, 128, 128, 0.8) 100%
          );
        box-shadow: 0 1px 5px 0 black;
      }

      h1 {
        color: white;
        text-shadow: 1px 1px 1px black;
        margin-top: 0;
      }
    `,
  ],
})
export class AppComponent {
  constructor() {}

  onUpdate(e) {
    console.log(e);
  }

  public title = 'EJ-ANG-900';
}
