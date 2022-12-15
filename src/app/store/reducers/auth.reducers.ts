import { Action, createReducer, on } from '@ngrx/store';

import { authActions } from '../actions';

export interface AuthState {
  isLogged: boolean;
}

export const initialAuthState: AuthState = {
  isLogged: false,
};

const _authReducer = createReducer(
  initialAuthState,
  on(authActions.loadauth, state => ({
    ...state,
  })),
  on(authActions.loadauthsuccess, (state, { auth }) => ({
    ...state,
    isLogged: auth.isLogged,
  })),
  on(authActions.login, state => ({
    ...state,
  })),
  on(authActions.loginsuccess, (state, { auth }) => ({
    ...state,
    isLogged: auth.isLogged,
  })),
  on(authActions.logout, state => ({
    ...state,
  })),
  on(authActions.logoutsuccess, (state, { auth }) => ({
    ...state,
    isLogged: auth.isLogged,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
