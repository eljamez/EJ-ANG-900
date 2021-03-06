import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { Synth } from 'tone';

@Component({
  selector: 'app-keyboard',
  template: `
    <section class="keyboard">
      <button
        *ngFor="let key of notes.keys"
        [ngClass]="{
          mousedown: isMouseDown(key),
          key: true,
          natural: isNatural(key)
        }"
        [style]="getGridStyles(key)"
        (mousedown)="handleMouseDown(key)"
        (mouseup)="handleMouseUp()"
      >
        {{ key }}
      </button>
    </section>
  `,
  styles: [
    `
      .keyboard {
        display: grid;
        padding: 0;
        margin: 0;
        min-height: 40vh;
        grid-template-rows: 2fr 1fr;
        grid-template-columns: repeat(21, 1fr);
      }

      .key {
        border: none;
        border-bottom: 2px solid gray;
        border-radius: 0 0 10px 10px;
        background-color: DimGray;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
        box-shadow: inset 0 3px 1px 0 rgba(0, 0, 0, 0.5);
        transform-origin: top center;
        perspective: 500px;
      }

      .natural {
        background-color: WhiteSmoke;
      }

      .mousedown {
        box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 1);
        background-color: hotpink;
        border-bottom: 1px solid Gainsboro;
        transform: rotateX(8deg);
      }
    `,
  ],
})
export class KeyboardComponent implements OnInit {
  @HostListener('document:keydown', ['$event'])
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const pressedKey = this.keyNoteMap[event.key];
    const isActive = this.isNoteActive(pressedKey);
    if (event.type === 'keydown' && !isActive) {
      this.activeKeys.push(pressedKey);
      this.playNote(this.toneMap[pressedKey]);
    }
    if (event.type === 'keyup' && isActive) {
      this.activeKeys = this.activeKeys.filter((key) => key !== pressedKey);
    }
  }

  playNote(note: string) {
    this.synth.triggerAttackRelease(note, '8n');
  }

  synthOptions = {
    oscillator: {
      frequency: 440,
      detune: 0,
      type: 'sine',
      phase: 0,
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.3,
      release: 1,
    },
  };

  synth = new Synth(this.synthOptions).toMaster();

  constructor(@Inject('notes') public notes) {}

  keyNoteMap = {
    a: 'c',
    w: 'cS',
    s: 'd',
    e: 'dS',
    d: 'e',
    f: 'f',
    t: 'fS',
    g: 'g',
    y: 'gS',
    h: 'a',
    u: 'aS',
    j: 'b',
  };

  gcsMap = {
    c: 1,
    cS: 3,
    d: 4,
    dS: 6,
    e: 7,
    f: 10,
    fS: 12,
    g: 13,
    gS: 15,
    a: 16,
    aS: 18,
    b: 19,
  };

  toneMap = {
    c: 'C4',
    cS: 'C#4',
    d: 'D4',
    dS: 'D#4',
    e: 'E4',
    f: 'F4',
    fS: 'F#4',
    g: 'G4',
    gS: 'G#4',
    a: 'A4',
    aS: 'A#4',
    b: 'B4',
  };

  activeKeys = [];

  isNatural(key) {
    return key.length === 1;
  }

  getGridStyles(key) {
    const isNatural = this.isNatural(key);
    const gs = isNatural ? '3' : '2';
    return `
    grid-column-start: ${this.gcsMap[key]};
    grid-row: 1 / ${gs};
    grid-column-end: span ${gs};
    z-index: ${!isNatural ? 10 : 1};
    `;
  }

  isNoteActive(activeKey: string) {
    return this.activeKeys.some((key) => activeKey === key);
  }

  isMouseDown(isDownKey: string) {
    return this.isNoteActive(isDownKey);
  }

  handleMouseDown(downKey: string) {
    this.playNote(this.toneMap[downKey]);
    this.activeKeys.push(downKey);
  }

  handleMouseUp() {
    this.activeKeys = [];
  }

  ngOnInit() {}
}
