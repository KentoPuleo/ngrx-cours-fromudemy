import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthState} from "./reducers";
import {Store} from "@ngrx/store";

@Injectable()
export const AuthGuard implements CanActivate{

  constructor(private store: Store<AuthState>)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> {

  }
}

