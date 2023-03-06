import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import {environment} from "../../../environments/environment";
import {User} from "../model/user.model";
import {AuthActions} from "../action-types";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const intitialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  intitialAuthState,
  on(AuthActions.login, (state, action) => {

    console.log("Calling login reducer")

    return {
      user:action.user
    }
  })
);

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];
