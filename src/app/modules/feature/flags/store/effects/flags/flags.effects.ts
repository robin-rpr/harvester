import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class FlagsEffects {
  constructor(private actions$: Actions) {}
}
