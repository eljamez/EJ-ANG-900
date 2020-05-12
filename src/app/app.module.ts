import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [AppComponent, KeyboardComponent],
  imports: [BrowserModule],
  providers: [{ provide: 'notes', useClass: NotesService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
