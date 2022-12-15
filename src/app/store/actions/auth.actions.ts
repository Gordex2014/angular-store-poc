import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Auth } from '../../models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    loadAuth: emptyProps(),
    loadAuthSuccess: props<{ auth: Auth }>(),
    login: emptyProps(),
    loginSuccess: props<{ auth: Auth }>(),
    logout: emptyProps(),
    logoutSuccess: props<{ auth: Auth }>(),
  },
});
