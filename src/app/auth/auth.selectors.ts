import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./reducers";


export const selectAuthState = createFeatureSelector<AuthState>("auth")


export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user//Einmal ! bedeutet false und zweimal bedeutet true
)

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)
