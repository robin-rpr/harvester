import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', loadChildren: () => import('./modules/feature/home/home.module').then(m => m.HomeModule),
        /*canActivate: [AuthGuard]*/
    },
    {path: 'internals/flags', loadChildren: () => import('./modules/feature/flags/flags.module').then(m => m.FlagsModule)},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
