import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <section>
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
        <app-keyboard (update)="onUpdate($event)">
          keys will go in here
        </app-keyboard>
      </section>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/eljamez/EJ-ANG-900">View On Github</a>
          </li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <p>Built with <a href="https://www.jamescript.com">JameScript</a></p>
      </footer>
    </main>
  `,
  styles: [
    `
      :host {
      }

      footer {
        color: white;
        box-sizing: border-box;
        display: grid;
        align-items: center;
        justify-items: center;
        max-height: 160px;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        display: inline-block;
      }

      p {
      }

      section {
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
        margin: 0 0 10px;
      }

      p {
        margin-top: 0;
        margin-bottom: 20px;
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
  public description =
    'A simple sythesizer built in Angular for your enjoyment';
}
