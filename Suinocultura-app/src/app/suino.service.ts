import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuinoService {
  private localStorageKey = 'suinos';

  constructor() { }

  saveSuinos(suinos: any): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(suinos));
  }

  getSuinos(): any {
    const savedSuinos = localStorage.getItem(this.localStorageKey);
    return savedSuinos ? JSON.parse(savedSuinos) : null;
  }
}
