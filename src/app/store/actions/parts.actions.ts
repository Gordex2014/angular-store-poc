import { createActionGroup, props } from '@ngrx/store';

import { Part } from '../../models';

export const partsActions = createActionGroup({
  source: 'Parts',
  events: {
    loadPartsByProductId: props<{ id: number }>(),
    loadPartsByProductIdSuccess: props<{ parts: Part[] }>(),
    loadPartsByProductIdFailure: props<{ error: Error }>(),
  },
});
