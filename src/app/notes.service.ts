import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  keys = ['c', 'cS', 'd', 'dS', 'e', 'f', 'fS', 'g', 'gS', 'a', 'aS', 'b'];
  constructor() {}

  getNote() {}
}
