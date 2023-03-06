import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export const AuthGuard implements CanActivate{

  constructorChecks(private store. Store<AuthState>)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> {

  }
}

