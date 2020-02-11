import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

/**
 * Authentication Route Guard
 *
 * @example
 * // example-routing.module.ts
 * // ...
 * const routes: Routes = [
 *      {path: '', redirectTo: '/admin', pathMatch: 'full'},
 *      {path: '/admin', component: AdminComponent, canActivate: [AuthGuardService]},
 *      {path: '/login', component: LoginComponent},
 *      {path: '**', redirectTo: '/admin'}
 * ];
 *
 * @see https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
 */
export class AuthGuard {

    /**
     * @param authService Service handling API calls
     * @param router Allowing site navigation
     */
    constructor(private authService: AuthService,
                private router: Router) {
    }

    /**
     * Route Guard allowing only Authenticated users to access
     * @param next Active Route Snapshot
     * @param state Router State Snapshot
     * @return Is user authenticated
     */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | {}> {
        return this.authService.isAuthenticated()
            .pipe(
                tap(async (isAuthenticated: boolean) => {
                    if (!isAuthenticated) {
                        try {
                            await this.router.navigate(['/login']);
                        } catch (err) {
                            throwError(err);
                        }
                    }
                    return isAuthenticated;
                }));
    }
}
