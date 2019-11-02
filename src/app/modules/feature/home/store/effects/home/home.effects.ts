import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions) {}
}
