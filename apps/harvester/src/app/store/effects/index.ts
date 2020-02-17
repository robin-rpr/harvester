import {RouterEffects} from './router/router.effects';
import {AppEffects} from "./app/app.effects";

export const effects: any[] = [RouterEffects, AppEffects];

export * from './router/router.effects';
export * from './app/app.effects';
