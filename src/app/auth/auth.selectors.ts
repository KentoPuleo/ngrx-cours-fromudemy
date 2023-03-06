import {createSelector} from "@ngrx/store";


export const isLoggedIn = createSelector(
  state => state["auth"],
  (auth) => !!auth.user //Einmal ! bedeutet false und zweimal bedeutet true
)

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)
